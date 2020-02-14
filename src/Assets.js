import {Button} from "@material-ui/core";
import React from "react";

const Assets=()=>{
    function leggTilEiendel() {
        fetch("/api/addAsset",{
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                individId: 2,
                categoryId: 1,
                assetName: 'Laptopp',
                description: 'laptopp',
                assetCondition: 'daarleg'

            })
        })
        .then((Response) => Response.json())
        .then((Result) => {
            alert(Result);
        })/**/
    }
    return(
      <div>
          <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={leggTilEiendel}>Legg til eiendel</Button>
      </div>
    );
}
export default Assets;
