import { pool } from "../db.js";

export const renderServices = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM services");
  res.render("services", { services: rows });
};

export const createServices = async (req, res) => {
  const newService = req.body;
  await pool.query("INSERT INTO `services` (`IDProducto`, `Descripcion`, `IDCategoria`, `Precio`) VALUES (?, ?, ?, ?)", ['', newService.Descripcion, newService.IDCategoria, newService.Precio]);
  res.redirect("/");
};

export const editService = async (req, res) => {
  const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM services WHERE IDProducto = ?", [id]);
    const service = result[0];
    const idCate = service.IDCategoria;
    res.render('services_edit', { service, idCate });
    
};
export const updateService = async (req, res) => {
  const { id } = req.params;
  const newService = req.body;
  await pool.query("UPDATE services set ? WHERE IDProducto = ?", [newService, id]);
  res.redirect("/");
};

export const deleteService = async (req, res) => {
   const { id } = req.params;
   const result = await pool.query("DELETE FROM services WHERE IDProducto = ?", [id]);
   if (result.affectedRows === 1) {
     res.json({ message: "Service deleted" });
   }
   res.redirect("/");
};
