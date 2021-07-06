import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt magnam odio consequuntur unde, illo, magni debitis earum, aperiam dolorem quia animi! Impedit enim tenetur ipsa odit optio dolore exercitationem Autem similique veniam vel repellat officiis, error sint vero? Dolore quas molestias ea facere vel, et placeat explicabo? Ipsa dolorum saepe molestias laboriosam suscipit sequi fugiat ab dolores veniam sed.'
    },
    {
        id: 2,
        title: 'Czym jest paradoks Fermiego?',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt magnam odio consequuntur unde, illo, magni debitis earum, aperiam dolorem quia animi! Impedit enim tenetur ipsa odit optio dolore exercitationem Autem similique veniam vel repellat officiis, error sint vero? Dolore quas molestias ea facere vel, et placeat explicabo? Ipsa dolorum saepe molestias laboriosam suscipit sequi fugiat ab dolores veniam sed.'
    },
    {
        id: 3,
        title: 'Ciemna materia i ciemna energia?',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt magnam odio consequuntur unde, illo, magni debitis earum, aperiam dolorem quia animi! Impedit enim tenetur ipsa odit optio dolore exercitationem Autem similique veniam vel repellat officiis, error sint vero? Dolore quas molestias ea facere vel, et placeat explicabo? Ipsa dolorum saepe molestias laboriosam suscipit sequi fugiat ab dolores veniam sed.'
    }
]

const HomePage = () => {
    
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))

    return (
        <div className='home'>
            {artList}
        </div>
     );
}
 
export default HomePage;