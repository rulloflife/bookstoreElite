import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddBook() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setISBN] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [typeofbook, setTypeofbook] = useState("");
    const [description, setDescription] = useState("");
    const [countInstock, setCountInstock] = useState("");
    const history = useHistory();

    async function addProduct() {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('typeofbook', typeofbook);
        formData.append('countInstock', countInstock);

        let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
            method: 'POST',
            body: formData
        });
        alert("Data has been saved");
        history.push("/")
    }

    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
                <br /> <br />
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name of Book" />
                <br /> <br />
                <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} placeholder="File" />
                <br /> <br />
                <input type="text" className="form-control" onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
                <br /> <br />
                <input type="text" className="form-control" onChange={(e) => setISBN(e.target.value)} placeholder="ISBN" />
                <br /> <br />
                <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <br /> <br />
                <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <br /> <br />
                <input type="text" className="form-control" onChange={(e) => setTypeofbook(e.target.value)} placeholder="Type of book" />
                <br /> <br />
                <input type="text" className="form-control" onChange={(e) => setCountInstock(e.target.value)} placeholder="CountInstock" />
                <br /> <br />
                <button className="btn btn-primary" onClick={addProduct} >Add Product</button>
                <br /> <br />
            </div>
        </div>
    )
}

export default AddBook;