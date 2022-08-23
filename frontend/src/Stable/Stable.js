import { useState, useEffect } from 'react';
import axios from 'axios';

const Stable = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = () => {
            axios.get('http://localhost:8080/cards')
            .then((res) => {
                setCards(res.data);
            })
            .catch((err) => {
                console.error('Could not fetch card data');
                console.error(err);
            });
        }

        fetchCards();
    }, []);

    return (
        <div>
            { cards.map((card, index) =>
                <img key={index} src={card['image_location']} alt={card['name']} />
            ) }
        </div>
    )
};

export default Stable;