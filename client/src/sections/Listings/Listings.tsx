import React from 'react';
import {server, useQuery} from '../../lib/api'
import { DeleteListingData, DeleteListingVariables,ListingsData } from './types';



// this makes actual graphql request to the server as query. So this const is going to be sent to server and server expects this format.
// what is expected is a promise, and we made a listings const to store the awaited response.
// then console.logged the response.
//EZ
const LISTINGS = `
    query Listings { 
        listings { 
            id
            title
            image
            address
            price
            numOfGuests
            numOfBeds
            numOfBaths
            rating
        }
    }

`;
// this is the same as above, but for deleteListing
// deletelisting mutation takes id as input which is ID!. then it passed as variable to the server.
// what returns is the id of the deleted listing. which in return is passed to the client.
const DELETE_LISTING = `
    mutation DeleteListing($id: ID!) {
        deleteListing(id: $id) {
            id
        }
    }
`;

interface Props{
    title: string;
    owner: string;
}



// destructured the props and typeDefined them using the interface's name. then passed them to the component.
export const Listings = ({title,owner}:Props) => {

    const {data,refetch} = useQuery<ListingsData>(LISTINGS);

    

    const deleteListings = async(id:string) => {
        await server.fetch<DeleteListingData,DeleteListingVariables>({
            query: DELETE_LISTING,
            variables: {id
            }
         });
         refetch();
            
    };
           
    const listings = data ? data.listings : null;

 
    const listingsList=listings? (
        <ul>
            {listings.map(listing =>{ return <li key={listing.id}>{listing.title} <button onClick={()=> deleteListings(listing.id)}>Delete This Listing.</button></li>;
            })}
        </ul>) : (<p>Click to load...</p>);
        
    return( 
    <div>
        <h2>{title} Listings Owned by {owner}</h2>
        {listingsList}
{/* Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation.
 A JavaScript expression can be a variable, function, an object, or any code that resolves into a value. */}
    </div>
    )
};

