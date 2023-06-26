import { connect } from "mongoose";

(async () => {
    try {
        const db = await connect("mongodb+srv://mauricio:12345@cluster0.qrcw4ac.mongodb.net/libros?retryWrites=true&w=majority");
        console.log("Database connected to", db.connection.name);
    }   catch (error) {
        console.error(error);
    }
})();