<script>
    import L from "leaflet";
    let map;
    let toolbar = L.control({ position: 'topright' });
	let toolbarComponent;
    
    const initialView = [39.8283, -98.5795];
    function createMap(container) {
        let m = L.map(container, { preferCanvas: true }).setView(
            initialView,
            5
        );

        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            {
                attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
	        &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
                subdomains: "abcd",
                maxZoom: 14,
            }
        ).addTo(m);

        return m;
    }
    function mapAction(container) {
        map = createMap(container);
        toolbar.addTo(map);

        markerLayers = L.layerGroup();
        for (let location of markerLocations) {
            let m = createMarker(location);
            markerLayers.addLayer(m);
        }

        lineLayers = createLines();

        markerLayers.addTo(map);
        lineLayers.addTo(map);

        return {
            destroy: () => {
                toolbar.remove();
                map.remove();
                map = null;
            },
        };
    }
    function resizeMap() {
        if (map) {
            map.invalidateSize();
        }
    }
</script>

<svelte:window on:resize={resizeMap} />
<svelte:head />

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
<div class="map" style="height:100%;width:100%" use:mapAction />