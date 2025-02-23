//example.com/news/[slug]
import { useRouter } from "next/router";
export default function Nachricht() {
    //useRouter - hook to access the router(адресная строка) object
    const router = useRouter();
    console.log(router);
    return (
        <>
            <h1>{router.query.Nachricht}</h1>
        </>
    );
}