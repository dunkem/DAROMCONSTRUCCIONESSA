import React, { useContext, useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, ButtonGroup, Carousel, Badge } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp, FaCheck, FaTruck, FaBuilding, FaSearch, FaMapMarkerAlt, FaStar, FaShippingFast, FaHeadset, FaAward } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { Helmet } from 'react-helmet';
import './Materiales.css';

function Materiales() {
    const { addToCart } = useContext(CartContext);
    const [selectedSubrubro, setSelectedSubrubro] = useState(localStorage.getItem('selectedSubrubro') || 'hidrofugos');
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [searchQuery, setSearchQuery] = useState('');
    const [clientType, setClientType] = useState('minorista');
    const [isLoading, setIsLoading] = useState(false);
    const [animateHero, setAnimateHero] = useState(false);
    const productGridRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Trigger hero animations after component mount
        setTimeout(() => setAnimateHero(true), 100);
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedSubrubro', selectedSubrubro);
    }, [selectedSubrubro]);

    // Enhanced materiales data structure
    const materiales = {

        hidrofugos: [
        { id: 1, name: "HIDROFUGO CERESITA X 4LTS", img: "/matCerecita-x-4lts-Copy.jpg" },
        { id: 6, name: "Hidrofugo Sika 1 Bidón x 10 Kg", img: "/matD_NQ_NP_898311-MLU76438891008_052024-O.jpg" },
        { id: 7, name: "Hidrofugo Sika 1 Bidón x 20 Kg", img: "/matHidrofugo-Sika-Bidon-X-20Lts-436071-principal.jpg" },
        { id: 8, name: "Hidrofugo Sika 1 Tambor x 200 Kg", img: "/mathidrofugosika200lts.jpg" },
        { id: 9, name: "Hidrofugo Sika 1 x 4 Lts.", img: "/matD_NQ_NP_898311-MLU76438891008_052024-O.jpg" }
    ],
    adhesivos: [
        { id: 10, name: "ADHESIVO EN PASTA KLAUKOL PLA-K - BALDE 30KG", img: "/mat1186719.jpg" },
        { id: 13, name: "Rapi retak ® [30kg] Adhesivo p/ Manga", img: "/matD_NQ_NP_726488-MLA80675005006_112024-O.jpg" },
        { id: 14, name: "Sika Cim Ligante Universal x 10 Lts.", img: "/matsikacim-ligante-x-10-lt.jpg" },
        { id: 15, name: "Sika Cim Ligante Universal x 20 Lts.", img: "/matD_NQ_NP_895527-MLA49121437482_022022-O.jpg" },
        { id: 16, name: "Sika Cim Ligante Universal x 4 Lts.", img: "/matsikacim-ligante-universal-bidon-x-4-lts-D_NQ_NP_650706-MLA26209031328_102017-F.jpg" }
    ],

    alambres: [
        { id: 21, name: "Alambre de atar Nº 16 x Kg.", img: "/matalambregalvanizado.jpg" },
        { id: 22, name: "Alambre Dulce Ø 4 x Kg.", img: "/matalambregalvanizado.jpg" },
        { id: 23, name: "Alambre Dulce Ø 6 x Kg.", img: "/matalambregalvanizado.jpg" },
        { id: 24, name: "ALAMBRE REC 2.03 MM", img: "/matalambregalvanizado.jpg" }
    ],

    antisol: [
        { id: 30, name: "ANTISOL NORMALIZADO BALDE X 20 LTS.", img: "/mat4b2c49e67d4f0bbe2097dd9cc0a500c8e367886c_1000x_png11-2ae64100578cd00ee116201594029074-1024-1024.jpg" },
        { id: 31, name: "Antisol Normalizado Tambor x 200 Lts.", img: "/matD_NQ_NP_796762-MLA45091993864_032021-O200lt.jpg" },
        { id: 32, name: "Antisol Solvente Tambor x 200 lts.", img: "/matD_NQ_NP_796762-MLA45091993864_032021-O200lt.jpg" }
    ],
    arena: [
        { id: 33, name: "Arena a Granel x m3", img: "/matarenaagranel.png" },
        { id: 34, name: "ARENA DE SEGUNDA X TONELADA", img: "/matarenaagranel.png" },
        { id: 36, name: "Arena en Bolsón", img: "/matbolsonarena.jpg" },
        { id: 37, name: "ARENA GRUESA EN BOLSÓN", img: "/matbolsonarena.jpg" },
        { id: 38, name: "ARENA X TONELADA", img: "/matarenaagranel.png" }
    ],
    asfalto: [
        { id: 39, name: "ASFALTO EN PAN X 12KG", img: "/matkoverplast_asfalto-plastico_bolsas.jpg" },
        { id: 40, name: "ASFALTO EN PAN X 20KG", img: "/matkoverprimer-emulsion-asfaltica.jpg" },
        { id: 41, name: "EMULSION ASFALTICA AL AGUA CAJA 16 kg", img: "/matEmulsion-Asfaltica-Acuosa-Megaflex-x-18-Kg-en-Caja.jpg" },
        { id: 42, name: "EMULSION ASFALTICA AL AGUA TAMBOR 200 kg", img: "/matD_NQ_NP_804733-MLA81886256540_012025-O.jpg" },
        { id: 43, name: "Megaflex emulsión asfáltica CAJA x 18 kg", img: "/matEmulsion-Asfaltica-Acuosa-Megaflex-x-18-Kg-en-Caja.jpg" }
    ],
    
    bloques: [
        { id: 47, name: "Bloque de H° P10 LISO 9x19x39 SILKEBLOCK", img: "/mat2482.jpg" },
        { id: 48, name: "Bloque de H° P13 LISO 13x19x39 SILKEBLOCK", img: "/mat2482.jpg" },
        { id: 49, name: "Bloque de H° P20 LISO 19x19x39 SILKEBLOCK", img: "/mat2482.jpg" },
        { id: 50, name: "Bloque de H° SP20 SIMIL PIEDRA 19x19x39", img: "/mat175705-800-800.jpg" },
        { id: 51, name: "BLOQUE H° MD20 LISO 19X19X19 PILA [210 X PALLET]", img: "/matD_NQ_NP_900373-MLA71025715249_082023-O.jpg" },
        { id: 52, name: "BLOQUE H° P20 LISO 19X19X39 PILA [105 X PALLET]", img: "/matBloque-Portante-P20-19x19x39-Tensolite-Observado-1.jpg" },
        { id: 53, name: "BLOQUE H° U20 LISO 19X19X39 PILA [105 X PALLET]", img: "/matdescargablock.jpg" },
        { id: 54, name: "BLOQUE Hº P13 LISO 13X19X39 PILA [147 X PALLET]", img: "/matD_769777-MLA45827988204_052021-C.jpg" },
        { id: 55, name: "BLOQUE Hº P8 LISO 8X190X390 [210 X PALLET ]", img: "/matD_769777-MLA45827988204_052021-C.jpg" },
        { id: 56, name: "BLOQUE SÍMIL PIEDRA ESQUINERO P20 19X19X39", img: "/matD_NQ_NP_768479-MLA80071447524_102024-O.jpg" },
        { id: 57, name: "BLOQUE SIMIL PIEDRA MITAD ESQUINERO P20 19X19X19", img: "/matbloq-mitad-sm-19.jpg" },
        { id: 58, name: "BLOQUE SIMIL PIEDRA MITAD P20 19X19X19", img: "/matbloq-mitad-sm-19.jpg" },
        { id: 59, name: "BLOQUE TENSOBLOCK T20 19X19X39 LISO [108 X PALLET]", img: "/matD_NQ_NP_769777-MLA45827988204_052021-O.jpg" },
        { id: 60, name: "BLOQUE TENSOBLOCK T20 SP 19X19X39 1 CARA TEXTURADA [108 X PALLET]", img: "/mat6c2d308e-d46f-447f-bd0d-e385dddd7445.jpg" },
        { id: 61, name: "BLOQUE TENSOBLOCK T20 SP ESQ 19X19X39 2 CARAS TEXTURADAS [108 X PALLET]", img: "/mat198c87bf-9cb0-43c8-95b1-70bad7647847.jpg" },
        { id: 62, name: "BLOQUE TENSOBLOCK T20 SP MEDIO 19X19X19 1 CARA TEXTURADA [216 X PALLET]", img: "/mat0c9fdc95-23c5-4892-b053-b6119c9a981b.jpg" },
        { id: 63, name: "BLOQUE TENSOBLOCK T20 U 19X19X39 ENCADENADO [108X PALLET]", img: "/matf9208585-6b71-4c02-ba45-135473655d2d.jpg" }
    ],

    cales: [
        { id: 68, name: "Cal Cacique Max x 30 Kg", img: "/MAT1994309-1.jpg" },
        { id: 69, name: "Cal Cacique Plus x 20kg", img: "/matD_Q_NP_646824-MLU78040454253_072024-O.jpg" },
        { id: 70, name: "Cal Milagro x 25 Kg", img: "/matcal-hidratada-el-milagro-x-25-kg.jpg" },
        { id: 71, name: "CAL SANTA ELENA x 20 Kg", img: "/mat325497-800-800.jpg" }
    ],

    caños: [
        { id: 75, name: "Caño de Hormigón 300 mm", img: "/cañosdehormigon.jpg" },
        { id: 76, name: "Caño de Hormigón 400 mm", img: "/cañosdehormigon.jpg" },
        { id: 77, name: "Caño de Hormigón 500 mm", img: "/cañosdehormigon.jpg" },
        { id: 78, name: "Caño de Hormigón 600 mm", img: "/cañosdehormigon.jpg" },
        { id: 79, name: "Caño de Hormigón 800 mm", img: "/cañosdehormigon.jpg" },
        { id: 80, name: "CAÑO DE HORMIGÓN ARMADO 500 MM", img: "/cañosdehormigon.jpg" },
        { id: 81, name: "CAÑO DE HORMIGÓN ARMADO 600 MM", img: "/cañosdehormigon.jpg" },
        { id: 82, name: "CAÑO DE HORMIGÓN ARMADO 700 MM", img: "/cañosdehormigon.jpg" },
        { id: 83, name: "CAÑO DE HORMIGÓN ARMADO 800 MM", img: "/cañosdehormigon.jpg" },
    ],

    cascote: [
        { id: 92, name: "Cascote picado a Granel x m3", img: "/matcascoteagranel.jpg" },
        { id: 94, name: "Cascote picado en Bolsón", img: "/matbolsoncascote.jpg" },
        { id: 95, name: "CASCOTE X TN", img: "/matcascoteagranel.jpg" }
    ],

    cementos: [
        { id: 96, name: "CEMENTO A GRANEL X TN", img: "/TOLVA.jpg" },
        { id: 97, name: "Cemento Loma Negra x 25 Kg", img: "/matCemento-Loma-Negra-CPC30-X-25Kg-principal.jpg" },
        { id: 98, name: "Plasticor x 40 Kg", img: "/mat1994311.jpg" },
        { id: 99, name: "Cemento Loma Negra x 50 Kg", img: "/mat1994314-1.jpg" }
    ],

    cintas: [
        { id: 108, name: "Cinta de Peligro - Rollo x 200 mts.", img: "/matD_NQ_NP_628763-MLA80787986455_112024-O.jpg" },
        { id: 109, name: "CINTA PAPEL 150 MTS.", img: "/mat2410023-2410075-241015021-426659dd778234a75716100392865728-1024-1024.jpg" },
        { id: 110, name: "CINTA TRAMADA 91.5 Mts.", img: "/matcinta-tramada-adhesiva.jpg" }
    ],

    clavos: [
        { id: 111, name: "Clavos de 2 1/2\" x Kg.", img: "/matclavos.png" },
        { id: 112, name: "Clavos de 2\" x Kg.", img: "/matclavos.png" },
        { id: 113, name: "Clavos de 9/25\" x Kg.", img: "/matclavos.png" }
    ],

    aditivos: [
        { id: 114, name: "ADITIVO Sikament", img: "/matpe-sikament-290-4l-09814737.jpg" },
        { id: 115, name: "SIKAMENT S PLUS TAMBOR X 220 KG", img: "/matdescargasikament.jpg" }
    ],

    morteros: [
        { id: 116, name: "MORTERO REVOQUE EXTERIOR SIKA STUKO X 25 KG", img: "/matD_NQ_NP_902976-MLA53685429988_022023-O.png" },
        { id: 117, name: "MORTERO REVOQUE INTERIOR SIKA STUKO X 25 KG", img: "/matD_NQ_NP_2X_829430-MLA54007226425_022023-F-768x1059.jpg" },
        { id: 118, name: "Mortero Adhesivo [30kg] retak®", img: "/mat301503-800-800.jpg" }
    ],

    ladrillos: [
        { id: 119, name: "Ladrillo Comun", img: "/matladcomun.png" },
        { id: 120, name: "Ladrillo Doble Pared 20x18x25 [120 X PALLET] CTIBOR", img: "/matladhuecodoble20x18.png" },
        { id: 121, name: "Ladrillo Doble Pared 20x18x33 FANELLI [90 X PALLET]", img: "/matladhuecodoble20x18.png" },
        { id: 122, name: "Ladrillo Doble Pared 24x18x33 FANELLI [72 X PALLET]", img: "/mat5d3ef746670221564407622.jpg" },
        { id: 123, name: "Ladrillo Doble Pared 27x18x33 FANELLI [54 X PALLET]", img: "/mat5d3ef746670221564407622.jpg" },
        { id: 124, name: "Ladrillo ECONOBLOCK-20x19x27 CTIBOR [80 X PALLET]", img: "/mat5d3efa275c8f81564408359.jpg" },
        { id: 125, name: "LADRILLO HUECO 12X18X33 [9A] CTIBOR [144 X PALLET]", img: "/matladhueco12.jpg" },
        { id: 126, name: "LADRILLO HUECO 12x18x33 [9A] FANELLI [144 X PALLET]", img: "/matladhueco12.jpg" },
        { id: 127, name: "LADRILLO HUECO 18X18X33 CTIBOR [90 X PALLET]", img: "/matladhueco18.jpg" },
        { id: 128, name: "LADRILLO HUECO 18x18x33 FANELLI [90 X PALLET]", img: "/matladhueco18.jpg" },
        { id: 129, name: "LADRILLO HUECO 18X18X33 MOLDE NUEVO [90 X PALLET]", img: "/matladhueco18.jpg" },
        { id: 130, name: "LADRILLO HUECO 8x18x33 CTIBOR [216 X PALLET]", img: "/matD_NQ_NP_899995-MLA31012148921_062019-O.jpg" },
        { id: 131, name: "LADRILLO HUECO 8X18X33 FANELLI [198 X PALLET]", img: "/matD_NQ_NP_899995-MLA31012148921_062019-O.jpg" },
        { id: 132, name: "Ladrillo KLIMABLOCK 27x19x20 FANELLI", img: "/matladrillo-klimablock1-ee1924f87f3667ede316589253736568-240-0.jpg" },
        { id: 133, name: "Ladrillo PORTANTE 12x19x33 CTIBOR [120 X PALLET]", img: "/mat277227-800-800.jpg" },
        { id: 134, name: "Ladrillo PORTANTE 12x19x33 FANELLI", img: "/mat277227-800-800.jpg" },
        { id: 135, name: "Ladrillo PORTANTE 18x19x33 CTIBOR [90 X PALLET]", img: "/mat277227-800-800.jpg" },
        { id: 136, name: "LADRILLO REFRACTARIO ESTANDAR 60", img: "/mat7120_01067_att11-6ab3c7005e1f6d6c3e16494691559720-1024-1024.png" },
        { id: 137, name: "Ladrillo retak® 50 10 [120 un]", img: "/mat130416_01.jpg" },
        { id: 138, name: "Ladrillo retak® 50 12.5 [96 un]", img: "/mat130416_01.jpg" },
        { id: 139, name: "Ladrillo retak® 50 15 [80 un]", img: "/mat130416_01.jpg" },
        { id: 140, name: "Ladrillo retak® 50 17.5 [72 un]", img: "/mat130416_01.jpg" },
        { id: 141, name: "Ladrillo retak® 50 20 [56 un]", img: "/mat130416_01.jpg" },
        { id: 142, name: "Ladrillo retak® 50 7.5 [160 un]", img: "/mat130416_01.jpg" },
        { id: 143, name: "Ladrillo retak® 60 10 [96 un]", img: "/mat130416_01.jpg" },
        { id: 144, name: "Ladrillo retak® 60 15 [64 un]", img: "/mat130416_01.jpg" },
        { id: 145, name: "Ladrillo retak® O 50 15 [80 un]", img: "/matbloque-_o_-retak-50x25x15cm1-14e4996084e58f0c6616936623520333-640-0.jpg" },
        { id: 146, name: "Ladrillo retak® U 50 15 [48 un]", img: "/mat101408_01.jpg" },
        { id: 147, name: "Ladrillo retak® U 50 20 [40 un]", img: "/mat101408_01.jpg" }
    ],
      lanasAislantes: [
        { id: 150, name: "LANA ISOVER FIL/LIV 50 1.2X18M", img: "/matisover-1.jpg" },
        { id: 151, name: "LANA ISOVER ROLACPL100 1.2X11", img: "/matisover-1.jpg" }
    ],

    mallas: [
        { id: 152, name: "malla # 4 [15x15] 2x3 mts [Trifilada]", img: "/matmallas.jpg" },
        { id: 153, name: "Malla # 4 [15x15] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 154, name: "Malla # 4 [15x25] 2x3 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 155, name: "malla # 4 [15x25] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 156, name: "malla # 5.1 [15x15] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 157, name: "Malla # 5.1 [15x25] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 158, name: "Malla # 6 [15x15] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 159, name: "malla # 6 [15x25] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 160, name: "Malla # 8 [15x15] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
        { id: 161, name: "MALLA 8 [15X25] 2x5", img: "/matmallas.jpg" },
        { id: 162, name: "Malla Job Shop Q109 - 50x50", img: "/matmallas.jpg" },
        { id: 163, name: "MALLA MEDIANA 5 2X5 180X180 ACINDAR", img: "/matmallas.jpg" },
        { id: 164, name: "Malla Plástica para Revoque 10x10 mm [1x50] 110gr", img: "/matmallaplastica.jpg" },
        { id: 165, name: "Malla Plástica para Revoque 5x5mm [1x50] 90gr/72gr", img: "/matmallaplastica.jpg" },
        { id: 166, name: "MALLA Q 131 150X150X5 2.40X6 [ ACINDAR ]", img: "/matmallas.jpg" },
        { id: 167, name: "MALLA Q 188 150X150X6 2.40X6 [ ACINDAR ]", img: "/matmallas.jpg" },
        { id: 168, name: "MALLA Q 335 150X150X8 2.40X6", img: "/matmallas.jpg" },
        { id: 169, name: "MALLA Q 524 150X150X10 2.40X6", img: "/matmallas.jpg" },
        { id: 170, name: "Malla venecita CLASIC MIX 112 - caja x 4.3 m2", img: "/matD_NQ_NP_974322-MLA51775159431_092022-O.jpg" }
    ],

    membranas: [
        { id: 174, name: "MANTO GEOTEXTIL NT2000 AR", img: "/matD_NQ_NP_607854-MLA72063386657_102023-O.jpg" },
        { id: 175, name: "MANTO GEOTEXTIL NT2000 AR [ METRO CUADRADO]", img: "/matD_NQ_NP_607854-MLA72063386657_102023-O.jpg" },
        { id: 176, name: "MEMBRANA ACRILICA LIQUIDA x KOVERPAINTK 10 kg", img: "/matMemb-liq-x-20-Kov-blanco.jpg" },
        { id: 177, name: "MEMBRANA ACRILICA LIQUIDA x KOVERPAINTK 20 kg", img: "/matMemb-liq-x-20-Kov-blanco.jpg" },
        { id: 178, name: "MEMBRANA ASF KARTONSEC GEOTEXTIL 40 KG 150 Gr/M2 MG40", img: "/matD_NQ_NP_916122-MLA69773535122_062023-O.jpg" },
        { id: 179, name: "MEMBRANA ASF. ALUM FLEXIBLE 40KG. KOVERTECH ROLL MT450", img: "/matD_NQ_NP_942963-MLA83899031038_042025-O.jpg" },
        { id: 180, name: "MEMBRANA ASF. ALUMINIO FLEXIBLE 25 KG", img: "/matD_NQ_NP_942963-MLA83899031038_042025-O.jpg" },
        { id: 181, name: "Membrana Asf. KFLEX MKF400 [35 KG]", img: "/matrollo-de-membrana-asfaltica-kovertech-flex-mt400-35kg.jpg" },
        { id: 182, name: "MEMBRANA geotrans x 40 Kg", img: "/MATmembrana-geotrans-40-kg-megaflex.jpg" },
        { id: 183, name: "Membrana Liquida Poliuretano WEBER Techos PU x 20 kg", img: "/mat166282-800-800.jpg" },
        { id: 184, name: "MEMBRANA Rollo bajo piso geocen x 4 mm", img: "/matgeocen_3C9DFB33F1B34339B2BE950D4A69D41A.jpg" },
        { id: 185, name: "SikaFill® Techos Membrana líquida acrílica. impermeable x 20 Kg", img: "/matsikafill_techos_2019-2011-1abeb017929d4f033a16222963199573-1024-1024.jpg" }
    ],

    pastinas: [
        { id: 189, name: "PASTINA CLASICA KLAUKOL X 1KG", img: "/matklauClasica.jpg" },
        { id: 190, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg ARENA", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 191, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg CHOCOLATE", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 192, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg GRIS CLARO", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 193, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg GRIS PLOMO", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 194, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg MARFIL", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 195, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg NACAR", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 196, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg NEGRO", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 197, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 1kg WHITE", img: "/matwhatsapp-image-2021-08-06-at-09-52-4071-75adf1cbf1f79a6fc016282556295454-640-0.jpg" },
        { id: 198, name: "Pastina Fluida. KLAUKOL PERFORMANCE x 5kg.", img: "/mat323807-800-800.jpg" }
    ],

    pegamentos: [
        { id: 208, name: "Pegamento adhesivo WEBER Superflex x 25 kg", img: "/matpack-weber-superflex-30kg_DD1E545A89464D7EAEA288119A48A528.jpg" },
        { id: 209, name: "PEGAMENTO Klaukol Blanco Pro X 10KG", img: "/mat094513.jpg" },
        { id: 210, name: "PEGAMENTO KLAUKOL FLEX 25 KG", img: "/matD_NQ_NP_666471-MLA52890649474_122022-O.jpg" },
        { id: 211, name: "Pegamento Klaukol Flex x 30 kg", img: "/matD_NQ_NP_666471-MLA52890649474_122022-O.jpg" },
        { id: 212, name: "Pegamento Klaukol Refractario x 10 kg", img: "/mat302831-800-800.jpg" },
        { id: 217, name: "Pegamento Para Venecitas Pileta KLAUKOL Blanco Pro x 30 kg", img: "/matD_NQ_NP_638511-MLA47821285930_102021-O.jpg" },
        { id: 219, name: "Pegamento Refractario Bolsa 10kg", img: "/mat26285_01_1.jpg" },
        { id: 220, name: "Pegamento SikaCeram Flexible x 25 kg", img: "/matSikaceramflex.jpg" },
        { id: 221, name: "Pegamento SikaCeram Flexible x 30 kg", img: "/matSikaceramflex.jpg" },
        { id: 222, name: "Pegamento SikaCeram Imp. x 25 kg", img: "/matsikaceram-imper-b5eff600a3c68b7fdd17410173323588-1024-1024.jpg" },
        { id: 223, name: "Pegamento SikaCeram Imp. x 30 kg", img: "/matsikaceram-imper-b5eff600a3c68b7fdd17410173323588-1024-1024.jpg" },
        { id: 224, name: "Pegamento SikaCeram Porce. x 25 kg", img: "/matadhesivo-sika-ceram-porcellanato-x-30kg.jpg" },
        { id: 225, name: "Pegamento SikaCeram Porce. x 30 kg", img: "/matadhesivo-sika-ceram-porcellanato-x-30kg.jpg" },
        { id: 226, name: "Pegamento WEBER LISTO Sachet x 3Kg.", img: "/mat-1281461-1.jpg" },
        { id: 227, name: "Klaukol RAPIBRICK X 30 Kg Pegamento Para Ladrillos C/ MANGA", img: "/matD_NQ_NP_835217-MLA50349123978_062022-O.jpg" }
    ],

    perfiles: [
        { id: 228, name: "PERFIL C GALVANIZ. 120x50x15x2.0x BARRA", img: "/matmontanomeysolera.jpg" },
        { id: 229, name: "PERFIL CANTONERA x 2.60 ", img: "/matmontanomeysolera.jpg" },
        { id: 230, name: "PERFIL MONTANTE 35mm x 2.60 Mts.", img: "/matmontanomeysolera.jpg" },
        { id: 231, name: "PERFIL MONTANTE 70mm x 2.60 Mts.", img: "/matmontanomeysolera.jpg" },
        { id: 232, name: "PERFIL OMEGA 13X69X2.6 DRYWALL", img: "/matmontanomeysolera.jpg" },
        { id: 233, name: "PERFIL SOLERA 35mm x 2.60 Mts.", img: "/matmontanomeysolera.jpg" },
        { id: 234, name: "PERFIL SOLERA 70mm x 2.60 Mts.", img: "/matmontanomeysolera.jpg" }
    ],

    piedras: [
        { id: 237, name: "PIEDRA 6/20 X TONELADA", img: "/matpiedraadranel.jpg" },
        { id: 241, name: "PIEDRA LAVADA 0/6 X TONELADA", img: "/matpiedraadranel.jpg" },
        { id: 242, name: "Piedra partida 10/30 a Granel x m3", img: "/matpiedraadranel.jpg" },
        { id: 243, name: "Piedra partida 6/12 a Granel x m3", img: "/matpiedraadranel.jpg" },
        { id: 245, name: "Piedra partida 6/12 en Bolsón", img: "/matbolsonpiedra.jpg" },
        { id: 246, name: "Piedra partida 6/20 a Granel x m3", img: "/matpiedraadranel.jpg" },
        { id: 247, name: "Piedra partida 6/20 en Bolsón", img: "/matbolsonpiedra.jpg" },
        { id: 250, name: "PIEDRA TEJO BOLA PLATO [DECORACION] X TONELADA", img: "/matD_645648-MLA77700355424_072024-O.jpg" }
    ],
        pinturas: [
        { id: 251, name: "Pintura Asfaltica AL SOLVENTE LATA 18 L", img: "/matD_NQ_NP_623079-MLA76084590175_042024-O.jpg" },
        { id: 252, name: "PINTURA ASFALTICA AL SOLVENTE TAMBOR 200L", img: "/matpintura-asfaltica-clipperflex-de-megaflex-200l-848c52aed2accb74f117377636990658-480-0.jpg" },
        { id: 253, name: "Pintura asfáltica impermeabilizante & anticorrosiva de 18lts", img: "/matD_NQ_NP_623079-MLA76084590175_042024-O.jpg" }
    ],

    placas: [
        { id: 254, name: "Placa Fenólico 18 Mm Ind 1.22 X 2.44 Mts", img: "/matD_NQ_NP_835745-MLA44877269064_022021-O.jpg" },
        { id: 255, name: "Placa retak® 50 5 [80 un]", img: "/mat1970733-1.jpg" },
        { id: 256, name: "Placa Revest RETAK 50x25x5 [80 X PALLET]", img: "/matplaca-revest-retak-50x25x5cm1-aaf503b17f0d46d81916936627310412-480-0.jpg" },
        { id: 257, name: "PLACA YESO KNAUF 9.5 X 2.4", img: "/mat1970733-1.jpg" },
        { id: 258, name: "PLACA YESO KNAUF STD 12.5 X 2.4", img: "/mat1970733-1.jpg" },
        { id: 259, name: "M2 PLACA EPS 1000X1000X20 MM. STD.", img: "/matD_602333-MLA78138176398_082024-C.jpg" },
        { id: 260, name: "MASTROPLAC 20MM ALTA DENSIDAD 20KG", img: "/matD_602333-MLA78138176398_082024-C.jpg" },
        { id: 261, name: "MASTROPLAC 25MM ALTA DENSIDAD 20KG", img: "/matD_602333-MLA78138176398_082024-C.jpg" },
        { id: 262, name: "MASTROPLAC 30MM ALTA DENSIDAD 20KG", img: "/matD_602333-MLA78138176398_082024-C.jpg" },
        { id: 263, name: "MASTROPLAC 50MM ALTA DENSIDAD 20KG", img: "/matD_602333-MLA78138176398_082024-C.jpg" },
        { id: 264, name: "MASTROPLAC 50MM ALTA DENSIDAD 25KG", img: "/matD_602333-MLA78138176398_082024-C.jpg" },
        { id: 265, name: "MASTROPLAC® PPR [placa para piso radiante]", img: "/matmastro.jpg" }
    ],

    polímeros: [
        { id: 266, name: "POLIET 180 NE 4MX5CM", img: "/matD_NQ_NP_662677-MLA32233586221_092019-O.jpg" },
        { id: 267, name: "Polietileno Negro 4x200 [Fraccionado]", img: "/matD_NQ_NP_662677-MLA32233586221_092019-O.jpg" },
        { id: 268, name: "Polietileno Negro 4x200x50 mts. [ 200 M2 ]", img: "/matD_NQ_NP_662677-MLA32233586221_092019-O.jpg" }
    ],

    productosSika: [
        { id: 269, name: "SIKA 1 EN PASTA X 20 KG", img: "/mat107648_01.jpg" },
        { id: 270, name: "Sika Anchor Fix - 1 Cartucho 300 ml.", img: "/matD_Q_NP_611814-MLA81636770734_012025-O.jpg" },
        { id: 271, name: "Sika Anchor Fix - 3001 Cartucho 600 ml", img: "/matD_Q_NP_611814-MLA81636770734_012025-O.jpg" },
        { id: 272, name: "SIKA BASE COAT X 25 KG", img: "/matD_859236-MLA76001401931_042024-C.jpg" },
        { id: 273, name: "SIKA Fibermesh-150 e3 x 12 kg", img: "/matD_NQ_NP_698539-MLA53101072501_122022-O.jpg" },
        { id: 274, name: "SIKA Inertol Infiltracion x 10 lts", img: "/matsika-inertol-infiltracion-x-10-lts.jpg" },
        { id: 275, name: "Sika Inertoltech Caja x 18 lts", img: "/matsika-inertol-infiltracion-x-10-lts.jpg" },
        { id: 276, name: "SIKA Monotop 107 SEAL Bolsa x 25 Kg", img: "/matSika-Mono-Top-107_BAJA.jpg" },
        { id: 277, name: "Sika Monotop 615 Bolsa x 25 kg.", img: "/mat3211-ec4d64b0eef6139a8b16074085394442-1024-1024.jpg" },
        { id: 278, name: "SIKA PAREX DUOJET", img: "/matduojet.jpg" },
        { id: 279, name: "SIKA ROD 5/8 PLG X MT", img: "/matsika-rod-5-8-plg-x-mt-101793.jpg" },
        { id: 280, name: "SIKA VISCOCRETE 9100 TAMBOR 220 KG", img: "/mathidrofugosika200lts.jpg" },
        { id: 281, name: "Sikadur 32 Gel. Predosificado 1 Kg", img: "/matsikadur-32-1-768x768.jpg" },
        { id: 282, name: "Sikadur 32 Gel. Predosificado X 5kg", img: "/matsikadur-32-1-768x768.jpg" },
        { id: 283, name: "Sikadur®-31 Normal X KG", img: "/mat101803_0.jpg" },
        { id: 284, name: "SikaFiber® Force PP-48 / RAD-48s x 5 kg", img: "/matsikafiber-m-12-bolsa-600g-1.jpg" },
        { id: 285, name: "Sikaflex 1 A Plus Cartucho 300 ml.", img: "/mat092f7d265991660c517393787788323-1024-1024.jpg" },
        { id: 286, name: "SIKAFLEX 1A PLUS GRIS X 600ML", img: "/matswika-1a-plus.jpg" },
        { id: 287, name: "SikaFloor 200 Level x 25 Kg", img: "/matsikafloor-200-level-autonivelante.jpg" },
        { id: 288, name: "Sikaguard® MAX 20 LTS", img: "/mat499448.jpg" },
        { id: 289, name: "Sikalastic 560 x 10 Lts.", img: "/matD_NQ_NP_968359-MLA53084551820_122022-O.jpg" },
        { id: 290, name: "SikaLatex® 20 LT", img: "/matD_NQ_NP_689133-MLA76898243095_062024-O.jpg" },
        { id: 291, name: "SIKATOP SEAL 107 FLEX MODULO [FLEX A BIDON 5LTS + FLEX B BOLSA X 20KG]", img: "/matar-SikaTop-Seal-107-Flex-00769899.jpg" }
    ],

    revoques: [
        { id: 292, name: "revoke® Exterior Proyectable X 30KG", img: "/matrevoke.jpg" },
        { id: 293, name: "revoke® Interior Proyectable X 30 KG", img: "/matrevoke.jpg" },
        { id: 294, name: "Revoque Cementicio Exterior [30kg] retak® 3 EN 1", img: "/matrevoke.jpg" },
        { id: 295, name: "Revoque Cementicio Interior [30kg] retak® 2 EN 1", img: "/matrevoke.jpg" },
        { id: 296, name: "Revoque Exterior Hidrofugo Proyectable 3 en 1 x 30Kg", img: "/mathidro3en1.jpg" },
        { id: 297, name: "Revoque Fibrado [30kg] retak®", img: "/matREVOQUEFIBRADOBOLSADE30KG.jpg" },
        { id: 298, name: "WEBER MIX E 3 En 1 x 30 Kg [revoque exterior manual]", img: "/matweber3en1man.jpg" },
        { id: 299, name: "Weber MIX I 2 en 1 x 30 Kg [revoque interior manual]", img: "/matweber2en1man.jpg" },
        { id: 300, name: "WEBER PROMEX E3 EN 1 X 30 KG [ REVOQUE PROYECTABLE]", img: "/matweberpromex.jpg" }
    ],

    selladores: [
        { id: 301, name: "SELLADOR POLIURETANO 46 BCO NODUPO", img: "/matselladorsika.jpg" },
        { id: 302, name: "Sikasil C - Cartucho x 300 ml.", img: "/matselladorsika.jpg" },
        { id: 303, name: "Sikasil IN [sellador silicona universal de curado neutro] - Cartucho x 300 ml.", img: "/matselladorsika.jpg" }
    ],

    separadores: [
        { id: 304, name: "SEPARADOR ARCO NIVEL PARA PORCELANATO [1200 UN]", img: "/matarcoseparadorporce.jpg" },
        { id: 305, name: "SEPARADOR CUÑA RANURADA PARA PORCELANATO [1200 UN]", img: "/matseparadorcuña.jpg" },
        { id: 306, name: "SEPARADOR LOSA/MALLA 15MM [BOLSA POR 100 U]", img: "/matseparadorlosa.jpg" },
        { id: 307, name: "SEPARADOR PARA LOSA TIPO CABALLETE DE 20 MM [100 UNIDADES]", img: "/matseparadorlosa.jpg" },
        { id: 308, name: "SEPARADOR PARA LOSA TIPO CABALLETE DE 30 MM [100 UNIDADES]", img: "/matseparadorlosa.jpg" },
        { id: 309, name: "SEPARADOR RADIAL 25 MM X 1500", img: "/matseparadorradial.jpg" },
        { id: 310, name: "SEPARADOR REINER RAPI/20 PARA LOSA TIPO CABALLETE [1500 UNIDADES]", img: "/matseparadorlosa.jpg" },
        { id: 311, name: "SEPARADOR REINER ST/40 [750UN.]", img: "/matseparadorradial.jpg" }
    ],

    tierra: [
        { id: 312, name: "Tierra de Relleno a Granel x m3", img: "/mattierraagranel1.png" },
        { id: 313, name: "Tierra de Relleno en Bolsón", img: "/matbolsontierra.jpg" },
        { id: 314, name: "Tierra Negra a Granel x m3", img: "/mattierraagranel1.png" },
        { id: 315, name: "Tierra Negra en Bolsón", img: "/matbolsontierra.jpg" }
    ],

    viguetas: [
    { id: 318, name: "Viguetas Pretensadas 1.00 mts", img: "/matviguetas.jpg" },
    { id: 319, name: "Viguetas Pretensadas 1.20 mts", img: "/matviguetas.jpg" },
    { id: 320, name: "Viguetas Pretensadas 1.40 mts", img: "/matviguetas.jpg" },
    { id: 321, name: "Viguetas Pretensadas 1.60 mts", img: "/matviguetas.jpg" },
    { id: 322, name: "Viguetas Pretensadas 1.80 mts", img: "/matviguetas.jpg" },
    { id: 323, name: "Viguetas Pretensadas 2.00 mts", img: "/matviguetas.jpg" },
    { id: 324, name: "Viguetas Pretensadas 2.20 mts", img: "/matviguetas.jpg" },
    { id: 325, name: "Viguetas Pretensadas 2.40 mts", img: "/matviguetas.jpg" },
    { id: 326, name: "Viguetas Pretensadas 2.60 mts", img: "/matviguetas.jpg" },
    { id: 327, name: "Viguetas Pretensadas 2.80 mts", img: "/matviguetas.jpg" },
    { id: 328, name: "Viguetas Pretensadas 3.00 mts", img: "/matviguetas.jpg" },
    { id: 329, name: "Viguetas Pretensadas 3.20 mts", img: "/matviguetas.jpg" },
    { id: 330, name: "Viguetas Pretensadas 3.40 mts", img: "/matviguetas.jpg" },
    { id: 331, name: "Viguetas Pretensadas 3.50 mts", img: "/matviguetas.jpg" },
    { id: 332, name: "Viguetas Pretensadas 3.60 mts", img: "/matviguetas.jpg" },
    { id: 333, name: "Viguetas Pretensadas 3.80 mts", img: "/matviguetas.jpg" },
    { id: 334, name: "Viguetas Pretensadas 4.00 mts", img: "/matviguetas.jpg" },
    { id: 335, name: "Viguetas Pretensadas 4.20 mts", img: "/matviguetas.jpg" },
    { id: 336, name: "Viguetas Pretensadas 4.40 mts", img: "/matviguetas.jpg" },
    { id: 337, name: "Viguetas Pretensadas 4.60 mts", img: "/matviguetas.jpg" },
    { id: 338, name: "Viguetas Pretensadas 4.80 mts", img: "/matviguetas.jpg" },
    { id: 339, name: "Viguetas Pretensadas 5.00 mts", img: "/matviguetas.jpg" },
    { id: 340, name: "Viguetas Pretensadas 5.20 mts", img: "/matviguetas.jpg" },
    { id: 341, name: "Viguetas Pretensadas 5.40 mts", img: "/matviguetas.jpg" },
    { id: 342, name: "Viguetas Pretensadas 5.60 mts", img: "/matviguetas.jpg" },
    { id: 343, name: "Viguetas Pretensadas 5.80 mts", img: "/matviguetas.jpg" },
    { id: 344, name: "Viguetas Pretensadas 6.00 mts", img: "/matviguetas.jpg" },
    { id: 345, name: "Viguetas Pretensadas 6.20 mts", img: "/matviguetas.jpg" },
    { id: 346, name: "Viguetas Pretensadas 6.40 mts", img: "/matviguetas.jpg" },
    { id: 347, name: "Viguetas Pretensadas 6.60 mts", img: "/matviguetas.jpg" },
    { id: 349, name: "Viguetas Pretensadas 7.00 mts", img: "/matviguetas.jpg" },
    { id: 350, name: "Viguetas Pretensadas 7.20 mts", img: "/matviguetas.jpg" }
],

    weber: [
        { id: 359, name: "WEBER CELUBLOCK X 30 KG", img: "/matwebercelublock.png" },
        { id: 360, name: "Weber Foor Ras x 30 kg", img: "/matweberfoorras.jpg" },
        { id: 361, name: "WEBER IMPER F x 25 kg", img: "/matweberimperf.jpg" },
        { id: 362, name: "WEBER Pegamento Refractarios x 20 kg", img: "/matweberrefractarios.jpg" },
        { id: 363, name: "WEBER primer Promotor de Adherencia Acrilico 10 Lt", img: "/matweberprimer.jpeg" },
        { id: 364, name: "WEBER TEC CERESITA IMPERMEABILIZANTE X 30 KG", img: "/matwebertec.jpg" },
        { id: 365, name: "WEBERMUR MULTIUSO x 25 kg", img: "/matwebermultiuso.jpg" }
    ],

    yesos: [
        { id: 369, name: "Yeso Tuyango Proyectable SG X 30 KG", img: "/mattuyangosg.jpg" },
        { id: 370, name: "Yeso Tuyango Tradicional X 30KG", img: "/mattuyangotradicional.jpg" }
    ],

    herramientas: [
        { id: 380, name: "Cuchara Dentada De 20 Mm", img: "/matcucharadentada.jpg" },
        { id: 384, name: "Rasqueta De Desbaste retak®", img: "/matrasquetaretak.jpg" },
        { id: 385, name: "Serrucho P/ HCCA [Tipo W] retak®", img: "/matserruchoretak.jpg" }
    ]
    };

 const handleSubrubroSelect = (subrubro) => {
        setIsLoading(true);
        setSelectedSubrubro(subrubro);
        setVisibleProducts(8);
        setSearchQuery('');
        
        // Simulate loading for better UX
        setTimeout(() => {
            setIsLoading(false);
            if (productGridRef.current) {
                productGridRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 300);
    };

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleProducts((prev) => prev + 8);
            setIsLoading(false);
        }, 500);
    };

    const normalizeString = (str) => 
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const handleSearch = (query) => {
        setSearchQuery(query);
        setVisibleProducts(8);
    };

    // Enhanced add to cart with feedback
    const handleAddToCart = (material) => {
        addToCart(material);
        // Puedes agregar aquí una notificación toast o feedback visual
    };

    const filteredProducts = materiales[selectedSubrubro]?.filter(material =>
        normalizeString(material.name).includes(normalizeString(searchQuery.trim()))
    ) || [];

    const getWhatsappLink = () => {
        const baseMessage = "Hola Darom SA, vi su página web y me interesa solicitar información";
        if (clientType === 'mayorista') {
            return `https://wa.me/5491128312705?text=${encodeURIComponent(baseMessage + ' para compras mayoristas')}`;
        }
        return `https://wa.me/542215739000?text=${encodeURIComponent(baseMessage)}`;
    };

    // Enhanced suppliers data
    const suppliers = [
        { src: '/logolomanegra.png', alt: 'Loma Negra', featured: true },
        { src: '/LOGOSIKA.png', alt: 'Sika', featured: true },
        { src: '/LOGOACINDAR.png', alt: 'Red Acindar', featured: true },
        { src: '/logodafre.jpg', alt: 'Dafre' },
        { src: '/logo varsovia.jpg', alt: 'Grupo Varsovia' },
        { src: '/LOGOTECMA.PNG', alt: 'Tecma' },
        { src: '/logoeleprint.png', alt: 'Eleprint' },
        { src: '/logogoldir.png', alt: 'Goldir' },
        { src: '/dycasalogo.jpg', alt: 'Ieb Construcciones' },
        { src: '/logoaubasa.png', alt: 'Aubasa' },
        { src: '/logopfisterer.png', alt: 'Pfisterer' },
        { src: '/logoweber.png', alt: 'Weber', featured: true },
        { src: '/logofanelli.png', alt: 'Fanelli' },
        { src: '/logoctibor.png', alt: 'Ctibor' }
    ];

    // Enhanced benefits with icons
    const benefits = [
        { 
            icon: <FaAward className="text-danger" size={28} />, 
            title: "Precios Mayoristas", 
            description: "Condiciones exclusivas para constructoras y revendedores" 
        },
        { 
            icon: <FaShippingFast className="text-danger" size={28} />, 
            title: "Distribución Zona Sur", 
            description: "Líderes en distribución de materiales en el Gran Buenos Aires Sur" 
        },
        { 
            icon: <FaCheck className="text-danger" size={28} />, 
            title: "Stock Permanente", 
            description: "Amplio stock para entrega inmediata minorista y mayorista" 
        },
        { 
            icon: <FaHeadset className="text-danger" size={28} />, 
            title: "Asesoramiento Técnico", 
            description: "Expertos en construcción para asesorarte en tu proyecto" 
        },
    ];

    // Enhanced testimonials
    const testimonios = [
        { 
            text: "Excelente servicio mayorista. Como constructora, necesitamos proveedores confiables y Darom SA cumple con todo. Los mejores precios y atención personalizada.", 
            author: "Constructora Varsovia",
            rating: 5
        },
        { 
            text: "Los mejores precios mayoristas de la zona sur. Atención personalizada y entrega puntual. Trabajamos con ellos hace más de 3 años sin inconvenientes.", 
            author: "Distribuidora Techosur",
            rating: 5
        },
        { 
            text: "Trabajamos con Darom hace años tanto para proyectos minoristas como mayoristas. Seriedad absoluta y stock permanente. Recomendados 100%.", 
            author: "Arq. Martínez & Asoc.",
            rating: 5
        }
    ];

    // Enhanced carousel render
    const renderCarouselItems = (items) => {
        const itemsPerSlide = 4;
        return Array.from({ length: Math.ceil(items.length / itemsPerSlide) }, (_, i) => (
            <Carousel.Item key={i}>
                <Row className="justify-content-center align-items-center">
                    {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
                        <Col md={3} sm={6} key={idx} className="mb-2">
                            <Card className={`supplier-card text-center border-0 bg-transparent ${item.featured ? 'featured-supplier' : ''}`}>
                                <Card.Img 
                                    variant="top" 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="supplier-logo img-fluid" 
                                    loading="lazy" 
                                    style={{ 
                                        maxHeight: '80px', 
                                        objectFit: 'contain',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                {item.featured && (
                                    <div className="featured-badge">
                                        <FaStar size={12} />
                                    </div>
                                )}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    // Enhanced subrubro names
    const subrubroNames = {
        'hidrofugos': 'Hidrofugos',
        'adhesivos': 'Adhesivos',
        'alambres': 'Alambres',
        'antisol': 'Antisol',
        'arena': 'Arena y Áridos',
        'asfalto': 'Asfalto',
        'bloques': 'Bloques',
        'cales': 'Cales',
        'caños': 'Caños',
        'cascote': 'Cascote',
        'cementos': 'Cementos',
        'cintas': 'Cintas',
        'clavos': 'Clavos',
        'aditivos': 'Aditivos',
        'morteros': 'Morteros',
        'ladrillos': 'Ladrillos',
        'lanasAislantes': 'Lanas Aislantes',
        'mallas': 'Mallas',
        'membranas': 'Membranas',
        'pastinas': 'Pastinas',
        'pegamentos': 'Pegamentos',
        'perfiles': 'Perfiles',
        'piedras': 'Piedras',
        'pinturas': 'Pinturas',
        'placas': 'Placas',
        'polímeros': 'Polímeros',
        'productosSika': 'Productos Sika',
        'revoques': 'Revoques',
        'selladores': 'Selladores',
        'separadores': 'Separadores',
        'tierra': 'Tierra',
        'viguetas': 'Viguetas',
        'weber': 'Productos Weber',
        'yesos': 'Yesos',
        'herramientas': 'Herramientas'
    };

    const zonasCobertura = [
        'Avellaneda', 'Quilmes', 'Berazategui',
        'Wilde', 'Bernal', 'Ezpeleta', 'Florencio Varela', 'La Plata',
        'Banfield', 'Lomas de Zamora', 'Temperley', 'Adrogué', 'Burzaco'
    ];

    // Render star rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar 
                key={i} 
                size={14} 
                className={i < rating ? "text-warning" : "text-muted"} 
            />
        ));
    };

    return (
        <>
            <Helmet>
                <title>Corralón en Zona Sur GBA | Materiales Mayoristas y Minoristas | Darom SA</title>
                <meta name="description" content="Corralón líder en zona sur del Gran Buenos Aires. Distribuidores mayoristas y minoristas de materiales de construcción. Precios competitivos, entrega rápida." />
                <meta name="keywords" content="corralón zona sur, materiales construcción mayorista, distribuidor materiales construcción, corralón GBA sur, materiales para construcción, cemento, hierros, ladrillos, precios mayoristas" />
                <meta property="og:title" content="Corralón Darom SA - Mayorista y Minorista en Zona Sur GBA" />
                <meta property="og:description" content="Distribuidores de materiales de construcción para mayoristas y minoristas en zona sur del Gran Buenos Aires." />
                <link rel="canonical" href="https://daromsa.com.ar/materiales" />
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "HardwareStore",
                        "name": "Darom SA Corralón",
                        "description": "Distribuidor mayorista y minorista de materiales de construcción en zona sur del Gran Buenos Aires",
                        "url": "https://daromsa.com.ar",
                        "telephone": "+54-221-573-9000",
                        "address": {
                            "@type": "PostalAddress",
                            "addressRegion": "Buenos Aires",
                            "addressCountry": "AR"
                        },
                        "areaServed": "Zona Sur Gran Buenos Aires",
                        "priceRange": "$$",
                        "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-13:00"
                    }`}
                </script>
            </Helmet>

            {/* Enhanced Hero Section */}
<div className={`heroc-section bg-dark text-white py-5 d-flex align-items-center ${animateHero ? 'animate-in' : ''}`} 
    style={{
        minHeight: '100vh',
        position: 'relative',
        backgroundImage: 'url(/portadacoralon.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }}>
    <Container>
        <div className="heroc-content text-center" style={{position: 'relative', zIndex: 2}}>
            <Row className="justify-content-center">
                <Col lg={10} xl={8}>
                    {/* Enhanced Badges */}
                    <div className="mb-4 animate-delay-1">
                        <Badge bg="danger" className="me-2 mb-2 p-3 fs-6 badge-darom">MAYORISTA</Badge>
                        <Badge bg="warning" text="dark" className="me-2 mb-2 p-3 fs-6">MINORISTA</Badge>
                        <Badge bg="success" className="me-2 mb-2 p-3 fs-6">ZONA SUR GBA</Badge>
                    </div>
                    
                    <h1 className="display-4 fw-bold mb-4 animate-delay-2">
                        CORRALÓN EN ZONA SUR GBA<br />
                        <span className="hero-highlight">MAYORISTA Y MINORISTA</span>
                    </h1>
                    
                    <p className="lead mb-4 fs-5 animate-delay-3">
                        <strong>Distribuidores líderes</strong> de materiales para la construcción en zona sur del Gran Buenos Aires. 
                        <br /><span className="text-warning fw-bold hero-subtitle">Precios mayoristas exclusivos para corralones, constructoras y revendedores.</span>
                    </p>
                    
                    {/* Enhanced Client Selector */}
                    <div className="client-selector mb-4 animate-delay-4">
                        <div className="text-center mb-3">
                            <small className="text-light opacity-75">SELECCIONÁ TU TIPO DE CLIENTE</small>
                        </div>
                        <ButtonGroup className="mb-3 client-btn-group">
                            <Button
                                variant={clientType === 'minorista' ? "danger" : "outline-light"}
                                onClick={() => setClientType('minorista')}
                                className="fw-bold px-4 py-3 client-btn"
                            >
                                <FaBuilding className="me-2" />
                                CLIENTE MINORISTA
                            </Button>
                            <Button
                                variant={clientType === 'mayorista' ? "warning" : "outline-light"}
                                onClick={() => setClientType('mayorista')}
                                className="fw-bold px-4 py-3 client-btn"
                            >
                                <FaTruck className="me-2" />
                                CLIENTE MAYORISTA
                            </Button>
                        </ButtonGroup>
                    </div>

                    {/* Enhanced Benefits Grid */}
                    <div className="benefits-grid mb-4 mx-auto animate-delay-5" style={{maxWidth: '900px'}}>
                        <Row className="g-3 justify-content-center">
                            {benefits.map((benefit, index) => (
                                <Col md={6} lg={5} key={index}>
                                    <div className="benefit-item d-flex align-items-start px-3 py-3">
                                        <div className="benefit-icon me-3">
                                            {benefit.icon}
                                        </div>
                                        <div className="text-start">
                                            <h5 className="fw-bold mb-2 text-warning">{benefit.title}</h5>
                                            <p className="small mb-0 text-light">{benefit.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    
                    {/* Google Rating Badge - Tamaño medio, centrado arriba de los botones */}
<div className="text-center mb-3 animate-delay-6">
    <a 
        href="#reviews" 
        className="google-rating-badge-md d-inline-flex align-items-center text-decoration-none py-2 px-3"
    >
        <div className="d-flex align-items-center me-2">
            <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
        </div>
        
        <div className="d-flex align-items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="rating-value-md">4.7</span>
        </div>
        
        <div className="rating-details-md">
            <div className="rating-count-md">+50 valoraciones</div>
            <div className="rating-source-md">Google Maps</div>
        </div>
    </a>
</div>
                    
                    {/* Enhanced Contact Buttons */}
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-4 animate-delay-7">
                        <Button 
                            variant="danger" 
                            size="lg"
                            href={getWhatsappLink()}
                            target="_blank"
                            className="px-5 py-3 fw-bold btn-darom-primary"
                        >
                            <FaWhatsapp className="me-2" size={20} />
                            {clientType === 'mayorista' ? 'COTIZACIÓN MAYORISTA' : 'SOLICITAR PRESUPUESTO'}
                        </Button>
                        
                        <Button 
                            variant="outline-light" 
                            size="lg"
                            href="#productos"
                            className="px-5 py-3 fw-bold btn-darom-outline"
                        >
                            <FaSearch className="me-2" />
                            VER PRODUCTOS
                        </Button>
                    </div>
                    
                    {/* Enhanced Contact Info */}
                    <div className="contact-info mt-4 p-4 animate-delay-8">
                        <Row className="g-4 justify-content-center">
                            <Col xs={12} sm={5} className="text-center">
                                <div className="mb-2">
                                    <FaBuilding className="text-light me-2" />
                                    <small className="text-light">CLIENTES MINORISTAS</small>
                                </div>
                                <div className="fw-bold fs-5 contact-phone">+54 221 573-9000</div>
                            </Col>
                            <Col xs={12} sm={5} className="text-center">
                                <div className="mb-2">
                                    <FaTruck className="text-warning me-2" />
                                    <small className="text-warning">CLIENTES MAYORISTAS</small>
                                </div>
                                <div className="fw-bold fs-5 text-warning contact-phone">+54 9 11 2831-2705</div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
</div>

            {/* Enhanced Product Categories Section */}
            <section id="productos" className="categories-section py-5 bg-light" ref={productGridRef}>
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title mb-3 display-5 fw-bold">Materiales de Construcción</h2>
                        <p className="lead text-muted fs-5">
                            Amplio stock para <strong className="text-danger">venta mayorista y minorista</strong> en zona sur del GBA
                        </p>
                    </div>
                    
                    {/* Enhanced Category Selector */}
                    <div className="category-selector mb-5">
                        <div className="text-center mb-3">
                            <h5 className="text-muted category-subtitle">SELECCIONÁ UNA CATEGORÍA</h5>
                        </div>
                        <ButtonGroup className="flex-wrap justify-content-center">
                            {Object.keys(materiales).map((subrubro) => (
                                <Button
                                    key={subrubro}
                                    variant={selectedSubrubro === subrubro ? "danger" : "outline-dark"}
                                    onClick={() => handleSubrubroSelect(subrubro)}
                                    className="m-1 text-uppercase fw-bold px-4 py-2 category-btn"
                                >
                                    {subrubroNames[subrubro] || subrubro}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>

                    {/* Enhanced Search Bar */}
                    <div className="search-bar-container mb-5">
                        <SearchBar onSearch={handleSearch} className="mb-4" />
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="text-center py-5">
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                            <p className="mt-2 text-muted">Cargando productos...</p>
                        </div>
                    )}

                    {/* Enhanced Product Grid */}
                    {!isLoading && (
                        <Row>
                            {filteredProducts.slice(0, visibleProducts).map((material) => (
                                <Col xs={12} sm={6} md={4} lg={3} key={material.id} className="mb-4">
                                    <Card className="product-card h-100 shadow-sm border-0">
                                        <div className="product-badge bg-danger">STOCK DISPONIBLE</div>
                                        {clientType === 'mayorista' && (
                                            <div className="product-badge bg-warning text-dark" style={{ top: '60px' }}>
                                                PRECIO MAYORISTA
                                            </div>
                                        )}
                                        <Card.Img 
                                            variant="top" 
                                            src={material.img} 
                                            alt={`Imagen de ${material.name}`} 
                                            loading="lazy" 
                                            className="product-image"
                                        />
                                        <Card.Body className="d-flex flex-column p-4">
                                            <Card.Title className="product-title fw-bold mb-3">{material.name}</Card.Title>
                                            <div className="mt-auto">
                                                <small className="text-muted d-block mb-3 product-availability">
                                                    ✅ Disponible para {clientType === 'mayorista' ? 'compra mayorista' : 'venta minorista'}
                                                </small>
                                                <Button
                                                    variant="danger"
                                                    size="lg"
                                                    onClick={() => handleAddToCart(material)}
                                                    className="w-100 fw-bold py-2 product-add-btn"
                                                >
                                                    Agregar al Carrito
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}

                    {!isLoading && visibleProducts < filteredProducts.length && (
                        <div className="text-center mt-5">
                            <Button 
                                variant="outline-danger" 
                                onClick={handleLoadMore} 
                                className="fw-bold px-5 py-2 load-more-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Cargando...' : 'Ver más productos'}
                            </Button>
                        </div>
                    )}

                    {!isLoading && filteredProducts.length === 0 && (
                        <div className="text-center py-5">
                            <p className="text-muted">No se encontraron productos para esta búsqueda.</p>
                        </div>
                    )}
                </Container>
            </section>

            {/* Enhanced Dual CTA Section */}
            <section className="cta-section py-5 bg-gradient">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="text-white mb-3 display-5 fw-bold">¿Necesitás precios mayoristas o asesoramiento técnico?</h2>
                            <p className="lead text-light fs-5">Contamos con equipo especializado para cada tipo de cliente</p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="h-100 border-0 shadow-lg cta-card">
                                <Card.Body className="text-center p-5">
                                    <FaBuilding size={60} className="text-danger mb-4 cta-icon" />
                                    <h4 className="fw-bold mb-3 display-6">Clientes Minoristas</h4>
                                    <p className="text-muted mb-4 fs-6">
                                        Atención personalizada para proyectos particulares, reformas y construcciones familiares
                                    </p>
                                    <Button 
                                        variant="danger" 
                                        size="lg"
                                        href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información%20para%20mi%20proyecto"
                                        target="_blank"
                                        className="fw-bold w-100 py-3"
                                    >
                                        <FaWhatsapp className="me-2" />
                                        CONSULTA MINORISTA
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="h-100 border-0 shadow-lg cta-card">
                                <Card.Body className="text-center p-5">
                                    <FaTruck size={60} className="text-warning mb-4 cta-icon" />
                                    <h4 className="fw-bold mb-3 display-6">Clientes Mayoristas</h4>
                                    <p className="text-muted mb-4 fs-6">
                                        Condiciones especiales para constructoras, revendedores, empresas y proyectos grandes
                                    </p>
                                    <Button 
                                        variant="warning" 
                                        size="lg"
                                        href="https://wa.me/5491128312705?text=Hola%20Darom%20SA,%20me%20interesa%20solicitar%20información%20y%20precios%20para%20compra%20mayorista"
                                        target="_blank"
                                        className="fw-bold w-100 py-3"
                                    >
                                        <FaWhatsapp className="me-2" />
                                        COTIZACIÓN MAYORISTA
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Enhanced Coverage Section */}
            <section className="coverage-section py-5 bg-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2 className="section-title mb-4 display-5 fw-bold">Cobertura en Zona Sur GBA</h2>
                            <p className="lead text-muted mb-4 fs-5">
                                <strong>Servicio de distribución a toda la zona sur del Gran Buenos Aires</strong>
                            </p>
                            <Row>
                                {zonasCobertura.map((zona, index) => (
                                    <Col xs={6} key={index} className="mb-3">
                                        <div className="d-flex align-items-center coverage-item">
                                            <FaMapMarkerAlt className="text-danger me-2 flex-shrink-0" />
                                            <span className="fw-semibold">{zona}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col md={6}>
                            <div className="bg-light p-5 rounded-3 text-center border coverage-card">
                                <FaTruck size={50} className="text-danger mb-3 coverage-icon" />
                                <h5 className="fw-bold text-danger mb-3 display-6">¿No encontrás tu localidad?</h5>
                                <p className="text-muted mb-4 fs-6">
                                    Consultanos por cobertura en otras zonas del Gran Buenos Aires. 
                                    Realizamos envíos a toda la región.
                                </p>
                                <Button 
                                    variant="outline-danger"
                                    size="lg"
                                    href="https://wa.me/5491128312705?text=Hola%20Darom%20SA,%20quisiera%20consultar%20si%20realizan%20envíos%20a%20mi%20localidad"
                                    target="_blank"
                                    className="fw-bold px-4 coverage-btn"
                                >
                                    CONSULTAR COBERTURA
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Enhanced Suppliers Section */}
            <section className="suppliers-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5 text-center display-5 fw-bold">Marcas Líderes que Distribuimos</h2>
                    <Carousel indicators={false} controls={suppliers.length > 4} variant="dark">
                        {renderCarouselItems(suppliers)}
                    </Carousel>
                </Container>
            </section>

            {/* Enhanced Testimonials Section */}
            <section className="testimonials-section py-5 bg-white">
                <Container>
                    <h2 className="section-title mb-5 text-center display-5 fw-bold">Confían en Nosotros</h2>
                    <Row>
                        {testimonios.map((testimonio, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card className="testimonial-card h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div className="rating mb-3">
                                            {renderStars(testimonio.rating)}
                                        </div>
                                        <blockquote className="mb-0">
                                            <p className="fst-italic fs-6 testimonial-text">"{testimonio.text}"</p>
                                            <footer className="blockquote-footer mt-3">
                                                <strong className="text-danger">{testimonio.author}</strong>
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Materiales;