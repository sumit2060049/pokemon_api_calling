// import { FC } from 'react';
// import React from 'react';

// interface Pokemon{
//   // id:number;
//   name:string;
//   imageUrl:string;
// }



// const HomePage: FC = () => {

//   return (
//     <div className="text-center">
//       <h3 className="text-4xl font-bold my-2">Pokemon Listing page</h3>
//       <div className="grid grid-cols-3 gap-4">
//         {pokemons.map((pokemon) => (
//           <div className="border p-4 rounded-lg">
//             <img src={pokemon.imageUrl} alt={pokemon.name} className="w-full h-auto mb-2" />
//             <p className="font-semibold">{pokemon.name}</p>
//             <a href={pokemon.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//               Details
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Pokemon {
  name: string;
  url: string;
}

const HomePage: FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const jsonData = await response.json();
        setData(jsonData.results);
        // console.log(jsonData.results)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getId = (url: string): any => {
    const parts: string[] | undefined = url.split("/");
    parts.pop();
    return parts.pop();
  }

  // return (
   
  //   <div>
  //     {isLoading ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <ul>
  //         {data.map((pokemon: Pokemon, index) => (
  //            <Link to={`/pokemon/${getId(pokemon.url)}`}>
  //             <li key={index}>{pokemon.name}</li>
  //             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`} alt="" />
  //           </Link>
  //         ))}

  //       </ul>
  //     )}
  //   </div>
  // );
  return (
    <div className="container">
      <h1 className="text-center my-5">Pokémon List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((pokemon: Pokemon, index) => (
            <div key={index} className="col">
              <div className="card">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`}
                  className="card-img-top"
                  alt={pokemon.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{pokemon.name}</h5>
                  <Link to={`/pokemon/${getId(pokemon.url)}`} className="btn btn-primary">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;



// import React, { useState, useEffect } from 'react';
// import { FC } from 'react';
// import { Link } from 'react-router-dom';

// interface Pokemon {
//   name: string;
//   url: string;
// }

// const HomePage: FC = () => {
//   const [data, setData] = useState<Pokemon[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon');
//         const jsonData = await response.json();
//         setData(jsonData.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const getId = (url: string): string => {
//     const parts = url.split('/');
//     return parts[parts.length - 2]; // Assuming the ID is the second last part of the URL
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {data.map((pokemon: Pokemon, index) => (
//             <li key={index}>
//               <Link to={`/pokemon/${getId(pokemon.url)}`}>{pokemon.name}</Link>
//               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`} alt={pokemon.name} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HomePage;
