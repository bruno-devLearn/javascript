import express from "express";
import livereload from "livereload";
import connectLivereload from "connect-livereload";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

const app = express();

app.use(connectLivereload());

const root = path.resolve(__dirname, "..");

app.use(express.static(root));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Middleware 404 — deve ficar sempre por último
app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

app.listen(3000);
