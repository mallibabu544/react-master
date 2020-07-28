import React from "react";

const  Header = props => {
    const{search, onInputChange,onSearchClick} = props;
    return(
        <div className="jumbotron">

        <h1 className="display-1">
        <span class="material-icons brand-icon">
menu_book
</span>
<span class="material-icons brand-icon">
fastfood
</span>
Food Recipes</h1>
<div class="input-group w-50 mx-auto mb-3">
  <input type="text" class="form-control"
   placeholder="Plz Search Your Recipe.... "
   value={props.search}
   onChange={props.onInputChange}
    aria-label="Recipient's username" 
    aria-describedby="basic-addon2"/>
  <div class="input-group-append">
   <button className="btn btn-dark" onClick= {onSearchClick}>Search....</button>
  </div>
</div>
        </div>
    )
}
export default Header;