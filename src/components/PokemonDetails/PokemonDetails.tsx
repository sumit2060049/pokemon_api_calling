// import { FC } from 'react';
// import { useParams } from 'react-router-dom';

// const PokemonDetails: FC = () => {

//   const { id } = useParams();

//   console.log(id)
  
//   return (
    // <div className="text-center">
    //   <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
    // </div>
//   );
// };

// export default PokemonDetails;




// import React, { useState, useEffect } from 'react';
// import { FC } from 'react';
// import { useParams } from 'react-router-dom';

// interface abilities{

// }

// const PokemonDetails: FC = () => {

//   const {id}=useParams();
//   console.log(id)
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/id');
//         const jsonData = await response.json();
//         setData(jsonData.abilities);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="text-center">
//     <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
//     {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       )}
//   </div>
    
     
    
//   );
// };

// export default PokemonDetails;

import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  base_experience:number;
  height:number;
  name:string
}

const PokemonDetails: FC = () => {
  const { id } = useParams();
  console.log(id);
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [base_Experience,setBase_Experience]=useState(0);
  const [height,setHeight]=useState(0);
  const [name,setName]=useState('')
  const [weight,setWeight]=useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const jsonData = await response.json();
        setAbilities(jsonData.abilities);
        setBase_Experience(jsonData.base_experience);
        setHeight(jsonData.height);
        setName(jsonData.name)
        setWeight(jsonData.weight)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
           <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  className=""
                  alt={name}
                style={{display:"block", margin:'0 auto'}}/>
          <h4>Abilities:</h4>
          <ul>
            {abilities.map((ability:Ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <p>Base Experience:{base_Experience}</p>
          <p>Height:{height}</p>
          <p>Name:{name}</p>
          <p>Weight:{weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;


