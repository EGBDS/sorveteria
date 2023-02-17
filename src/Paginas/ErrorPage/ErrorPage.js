import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <strong>PAGINA NÃO ENCONTRADA! Volte para a página inicial</strong>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default ErrorPage;