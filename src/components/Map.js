import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./Map.css";

function MapRender() {
    return(
        <div>
            <img src="assets/map.png" className="map-frame" />
        </div>
    );
}
 
// function MapRender() {
//     return (
//         <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             {/* <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div> */}
//         </InfoWindow>
//       </Map>
//     );
// }

export default MapRender
  
// export default GoogleApiWrapper({
// apiKey: ("AIzaSyCHFf5ttb_EdheD6tkSSd78Vj6kI-A4z64")
// })(MapRender)