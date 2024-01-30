import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{ width: 30+ '%' }}>
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has aoccured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
