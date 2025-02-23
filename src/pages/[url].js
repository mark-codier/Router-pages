import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Dex(){
    const router = useRouter();
    useEffect(() => {
        router.push("/home");
    }, []);
}