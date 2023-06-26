import express from "express";
import indexRoutes from './routes/indexRoutes';
import exphbs from "express-handlebars";
import path from "path"; //modulo de node 
import morgan from "morgan"; //para ver en consola

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

// midleware-intermediario entre el cliente y servidor
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

//rutas
app.use(indexRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, "frontend")));

export default app; //exporto el objeto app