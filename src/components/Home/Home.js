import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

function Home()
{

    const [CategoryData, setCategoryData] = useState([])

    
    const getallCategory = ()=>{
        const serverURL=`http://localhost:3000/getAllCategories`;

        axios.get(serverURL)
        .then(response=>{
            console.log(response.data)
            setCategoryData(response.data)
        })
        .catch((error)=>{
                 console.log(error)
             })
    }

    useEffect(()=>{
        getallCategory()
    },[])

    return(
        <>
        <h1>Welcome To Quizzers Website</h1>
        <p>The best place to practice</p>
        {CategoryData.map(item => {
                return (
                    <Card style={{ width: '22rem' , background: 'black', color:'white', margin:'5%', padding:'5%'}} key={item.id}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.question}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>{item.answers.answer_a}</li>
                                    <li>{item.answers.answer_b}</li>
                                    
                                </ul>
                               
                            </Card.Text>
                            <Button variant="primary">Take a quiz</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}

export default Home;