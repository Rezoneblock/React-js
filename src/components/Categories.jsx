import React from 'react'

// class Categories extends React.Component {

//   const [state, setState] = useState(initialState);

//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index,
//     });
//   }

//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="">Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}>{name}
//             </li>)
//           )}
//         </ul>
//       </div>
//     )
//   }
// }

const Categories = React.memo(function Categories({ items, onClick }) {

  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClick(index);
  }


  return (
    <div className="categories">
      <ul>
        <li 
          onClick={() => {
            onSelectItem(null);
          }} 
          className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        { items && items.map((name, index) => 
          <li 
          className={activeItem === index ? 'active' : ''}
          onClick={() => onSelectItem(index)} 
          key={`${name}_${index}`}>{name}</li>
        )}
      </ul>
    </div>
  )
});

export default Categories;
