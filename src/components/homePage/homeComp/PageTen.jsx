import { useEffect , useState} from "react";
import axios from "axios"

function PageTen(){

    const [data , setData] = useState("")
    const [dataFromBackend, setDataFromBackend] = useState("");

    useEffect(() => {
        axios.get("/api/users")
        .then(result => {
            // console.log(result)
            console.log(result);
            // console.log(result.objects[0].label);
            // console.log(result.data.objects[1].label);
            // setData(result.data.objects[0].label)
            // const blog = result.data.objects[0].post_body
            // const newBlog= blog;
            // setDataFromBackend(newBlog);
            
        })
        .catch(err => {console.log(err)})
          
          
    }, []);
    

    return(
        <section>
            <h1 className="font-extrabold text-4xl text-center m-10 text-cyan-500">{data} hello</h1>
            <div className="px-20" dangerouslySetInnerHTML={{ __html: dataFromBackend }} >

            </div>
        </section>
    )
}

export default PageTen;