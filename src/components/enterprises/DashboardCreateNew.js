
import CreateEnterprise from './../../ui-components/CreateEnterprise';
import { Heading, MapView } from '@aws-amplify/ui-react';
import { API } from "aws-amplify";
import { createEnterprise } from './../../graphql/mutations';
import { Marker, useControl } from 'react-map-gl';
import React, { useState, useRef, useCallback, useEffect } from 'react';

import MapboxDraw from '@mapbox/mapbox-gl-draw';

function DrawControl(props) {
    useControl(
      () => new MapboxDraw(props),
      ({map}) => {
        map.on('draw.create', props.onCreate);
        map.on('draw.update', props.onUpdate);
        map.on('draw.delete', props.onDelete);
      },
      ({map}) => {
        map.off('draw.create', props.onCreate);
        map.off('draw.update', props.onUpdate);
        map.off('draw.delete', props.onDelete);
      },
      {
        position: props.position
      }
    );
  
    return null;
  }
  


function DashboardCreateNewEnterprise({ onSuccess, onError}) {

    const [latitude, setLatitude] = useState(45.524952)
    const [longitude, setLongitude] = useState(-73.645960)

    const [serviceZone, setServiceZone] = useState([])

    const [viewState, setViewState] = React.useState({
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      });


    const createNewEnterprise = async (fields) => {
        await API.graphql({
            query: createEnterprise,
            variables: {
                input: fields
            }
        }).then((r) => {
            onSuccess()
        });
    }

    const onFormChange = (a,b,c) => {
        console.log("FormChange", a, b, c)
    }


    const controls = {
        polygon: serviceZone.length == 0,
        trash: serviceZone.length > 0,
        line: false,
        marker: false, 
        point: false,
        line_string: false,
        combine_features: false,
        uncombine_features: false
    }

    return (
        <>
            <Heading >Create new Enterprise</Heading>
            <CreateEnterprise onSubmit={createNewEnterprise} onChange={onFormChange} overrides={{longitude, latitude}}/>
            <>Serving on area {serviceZone.length} {JSON.stringify(serviceZone)}</>
            <MapView
                style={
                    {width: '700px', height:'700px'}
                }
                /* 
                https://visgl.github.io/react-map-gl/docs/get-started/state-management
                Drawing on the map : https://maplibre.org/maplibre-gl-js-docs/example/mapbox-gl-draw/ 
                https://github.com/visgl/react-map-gl/blob/7.0-release/examples/draw-polygon/src/app.tsx
                */
                initialViewState={{
                    latitude, longitude,
                    zoom: 6,
                }}
                onMove={evt => setViewState(evt.viewState)}
                >

                <DrawControl
                    position="top-left"
                    displayControlsDefault={true}
                    controls={controls}
                    defaultMode="draw_polygon"
                    onCreate={(e)=>{
                        console.log("create", e)
                        setServiceZone(e.features[0].geometry.coordinates[0])
                    }}
                    onUpdate={(e)=>{console.log("onUpdate", e)}}
                    onDelete={(e)=>{console.log("onDelete", e); setServiceZone([])}}
                    />
            </MapView>
        </>
    )
}

export default DashboardCreateNewEnterprise