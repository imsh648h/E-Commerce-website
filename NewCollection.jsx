import React from 'react'
import './NewCollection.css'
import New_Collection from '../Assets/New_Collection'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
     <div className='new-collections'>
        <h2>NEW COLLECTIONS</h2>
        <hr/>
                      
           <div className="collections">
        {New_Collection.map((item,i)=>{
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewCollection
