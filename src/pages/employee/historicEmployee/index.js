import { getUserByEmail, getUserById } from "@/services/consults";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react"
import { useParams } from "react-router-dom";
import Layout from "./layout";
import '../style.css';
export default function Historic() {
    const { id } = useParams();
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData(id)

    }, [id]);

    async function getData(id) {
        const dataByCollectionUsers = (await getUserById('users', id));

        const dataByCollectionReferences =
            await getUserByEmail('referencesAlterations', dataByCollectionUsers.data.email);

        setData(dataByCollectionReferences.concat(dataByCollectionUsers))
    }

    if(data.length > 0){
        return (
            <div className='containerHistoric'>
                < span > Histórico</span >
               {/* <PDFViewer className='containerHistoric'>
                    <Layout data={data} />
                </PDFViewer> */}

<PDFDownloadLink document={<Layout data={data} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
            </div >
        )

    }else{ return (  <>Erro</>  )

    }
    
}