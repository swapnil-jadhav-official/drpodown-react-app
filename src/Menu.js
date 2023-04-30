import React from 'react';

const options = ["Yes", "Probably not"];
function Menu(props) {
    return (
        <div>

            {

                options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                
                ))
            }

            
        </div>
    );
}

export default Menu;