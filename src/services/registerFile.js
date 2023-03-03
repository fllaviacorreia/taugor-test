import { storage } from "@/config/firebase";

async function registerFile(file, user) {
    await storage.ref("folder/"+user+'/'+file);
}

export default registerFile;