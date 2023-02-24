import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('عبدالله')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('ok')
            setIsPending(false);
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>أضف مدونة جديدة</h2>
            <form onSubmit={handleSubmit}>
                <label>عنوان المدونة</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>التفاصيل</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>المؤلف</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="عبدالله">عبدالله</option>
                    <option value="خالد">خالد</option>
                </select>
                {!isPending && <button>أضف المدونة</button>}
                {isPending && <button disabled>يتم اضافة...</button>}
            </form>
        </div>
    );
}

export default Create;
