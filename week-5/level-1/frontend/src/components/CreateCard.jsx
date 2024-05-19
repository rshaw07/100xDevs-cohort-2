import { useState } from "react"

export function CreateCard({Rerender}){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interests, setInterest] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    
    return <div className="main">
        <div>
        <input type="text" placeholder="Id (only during deletion or updating)" onChange={function(e){
            const data = e.target.value;
            setId(data.trim());
        }} /><br />
        <input type="text" placeholder="Name" onChange={function(e){setName(e.target.value)}} /><br />
        <input type="text" placeholder="Description" onChange={function(e){setDescription(e.target.value)}} /><br />
        <input type="text" placeholder='Interests (separated by ",")' onChange={function(e){
            const data = e.target.value.split(",");
            data.map(function(temp){
                return temp.trim();
            })
            setInterest(data);
        }} /><br />
        <input type="text" placeholder="LinkedIn profile link" onChange={function(e){setLinkedin(e.target.value)}} /><br />
        <input type="text" placeholder="Twitter profile link" onChange={function(e){setTwitter(e.target.value)}} /><br />
        <button onClick={()=>{
            fetch("http://localhost:3000/create",{
                method: "POST",
                body: JSON.stringify({
                    name,
                    description,
                    interests,
                    linkedin,
                    twitter,
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async function(res){{
                const json = await res.json();
                Rerender(r => r + 1);
                alert("Card added");
            }})
        }}>Create card</button>
        <button onClick={()=>{
            fetch("http://localhost:3000/update",{
                method: "PUT",
                body: JSON.stringify({
                    id,
                    name,
                    description,
                    interests,
                    linkedin,
                    twitter,
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async function(res){{
                const json = await res.json();
                Rerender(r => r + 1);
                alert("Card updated");
              }})
        }}>Update card</button>
        <button onClick={()=>{
            fetch("http://localhost:3000/remove",{
                method: "DELETE",
                body: JSON.stringify({
                    id
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async function(res){{
                const json = await res.json();
                console.log(json);
                Rerender(r => r + 1);
                alert("Card deleted")
              }})
        }}>Delete card</button>
        </div>
    </div>
}