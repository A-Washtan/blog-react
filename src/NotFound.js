import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>نأسف</h2>
            <p>الصفحة غير موجودة</p>
            <Link to="/">الرجوع للصفحة الرئيسية</Link>
        </div>
    );
}

export default NotFound;