import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, ButtonGroup, Carousel } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { Helmet } from 'react-helmet';
import './Materiales.css';

function Materiales() {
    const { addToCart } = useContext(CartContext);
    const [selectedSubrubro, setSelectedSubrubro] = useState(localStorage.getItem('selectedSubrubro') || 'hidrofugos');
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [searchQuery, setSearchQuery] = useState('');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Save selected subrubro to local storage
    useEffect(() => {
        localStorage.setItem('selectedSubrubro', selectedSubrubro);
    }, [selectedSubrubro]);

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
    autoperforantes: [
        { id: 44, name: "AUTOPERFORANTES DE 50 mm COMPLETOS X 10 CA", img: "/matD_NQ_NP_2X_690172-MLA79746205729_102024-T.jpg" },
        { id: 45, name: "AUTOPERFORANTES DE 50 mm X100 UN", img: "/matD_NQ_NP_759439-MLA53057046758_122022-O.jpg" },
        { id: 46, name: "AUTOPERFORANTES DE 63 mm X100UN", img: "/matD_NQ_NP_759439-MLA53057046758_122022-O.jpg" }
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
        { id: 98, name: "Cemento Loma Negra x 50 Kg", img: "/mat1994314-1.jpg" }
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
        { id: 367, name: "YESO KNAUF 25 KG", img: "/matyesoknauf.jpg" },
        { id: 368, name: "YESO KNAUF MP75 X25 KG", img: "/matyesoknauf.jpg" },
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
        setSelectedSubrubro(subrubro);
        setVisibleProducts(8);
        setSearchQuery('');
    };

    const handleLoadMore = () => {
        setVisibleProducts((prev) => prev + 8);
    };

    const normalizeString = (str) => 
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const handleSearch = (query) => {
        setSearchQuery(query);
        setVisibleProducts(8);
    };

    const filteredProducts = materiales[selectedSubrubro].filter(material =>
        normalizeString(material.name).includes(normalizeString(searchQuery.trim()))
    );

  

    const suppliers = [
    { src: '/logolomanegra.png', alt: 'Loma Negra' },
    { src: '/LOGOSIKA.png', alt: 'Sika' },
    { src: '/LOGOACINDAR.png', alt: 'Red Acindar' },
    { src: '/logodafre.jpg', alt: 'Dafre' },
    { src: '/logo varsovia.jpg', alt: 'Grupo Varsovia' },
    { src: '/LOGOTECMA.PNG', alt: 'Tecma' },
    { src: '/logoeleprint.png', alt: 'Eleprint' },
    { src: '/logogoldir.png', alt: 'Goldir' },
    { src: '/dycasalogo.jpg', alt: 'Ieb Construcciones' },
    { src: '/logoaubasa.png', alt: 'Aubasa' },
    { src: '/logopfisterer.png', alt: 'Pfisterer' },
    { src: '/logoweber.png', alt: 'Weber' },
    { src: '/logofanelli.png', alt: 'Fanelli' },
    { src: '/logoctibor.png', alt: 'Ctibor' }
  ];

    // Beneficios de comprar en Darom SA
    const benefits = [
        
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Precios Competitivos", 
            description: "Las mejores condiciones del mercado gracias a nuestra gama de proveedores" 
        },
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Calidad Garantizada", 
            description: "Productos de primeras marcas para la construcción desde 19678" 
        },
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Asesoramiento", 
            description: "Expertos en construcción a tu disposición en cada etapa de tu obra" 
        },
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Entrega Rápida", 
            description: "Despachos en 24/48hs" 
        },
    ];

    const testimonios = [
  { 
    text: "Los mejores! Compré todo el hierro, ladrillos y materiales para mi casa. Llené la platea y 3 losas de hormigón con ellos, todo impecable. Destaco la atención, productos y servicio de entrega.", 
    author: "Pablo Laurito" 
  },
  { 
    text: "Muy buena atención. Eficacia, rapidez y puntualidad en la entrega. Excelente logística para satisfacer las necesidades de sus clientes.", 
    author: "Sebastian Godoy" 
  },
  { 
    text: "Excelente servicio de atención, entregas sin demoras y seguimiento de pedidos. Respuesta inmediata y asesoramiento técnico especializado.", 
    author: "Grupo Varsovia" 
  },
  { 
    text: "Cumplieron con los tiempos y lo pactado. Destaco la excelente predisposición y programación impecable de Guillermo.", 
    author: "Laura Scandroglio" 
  },
  { 
    text: "La atención y comunicación son impecables. Gran predisposición para resolver problemas técnicos. Altamente recomendable.", 
    author: "Arq. De los Santos" 
  },
  { 
    text: "Excelente atención y predisposición para asesorar en materiales de construcción.", 
    author: "Matias Muchenik" 
  },
  { 
    text: "Resalto la atención de Aixa: profesional, predispuesta y resolutiva. Muy satisfecho con el servicio.", 
    author: "Manuel Garriga" 
  },
  { 
    text: "Excelente servicio. Comunicación clara y logística eficiente para obras de gran envergadura.", 
    author: "Claudio Castiglia" 
  },
  { 
    text: "Los mejores precios y servicio en 20 años. Siempre que puedo, elijo trabajar con ellos por su seriedad.", 
    author: "Emmanuel Bor" 
  },
  { 
    text: "Atención rápida y soluciones a medida para proyectos arquitectónicos complejos.", 
    author: "Goldir" 
  },
  { 
    text: "Equipo confiable y detallista. Materiales de primera calidad para estructuras exigentes.", 
    author: "German Luiso" 
  }
];

    const renderCarouselItems = (items) => {
        const itemsPerSlide = 4;
        return Array.from({ length: Math.ceil(items.length / itemsPerSlide) }, (_, i) => (
            <Carousel.Item key={i}>
                <Row className="justify-content-center">
                    {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
                        <Col md={3} sm={6} key={idx} className="mb-2">
                            <Card className="supplier-card text-center border-0 bg-transparent">
                                <Card.Img 
                                    variant="top" 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="supplier-logo img-fluid" 
                                    loading="lazy" 
                                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    const subrubroNames = {
        'hidrofugos': 'Hidrofugos',
        'ladrillos': 'Ladrillos',
        'aridos': 'Áridos',
        'cementos y cales': 'Cementos y Cales',
        'hierros': 'Hierros',
        'mallas': 'Mallas',
        'yeso': 'Yesos',
        'pegamentos': 'Pegamentos',
        'viguetas': 'Viguetas',
        'caños de hormigón': 'Caños de Hormigón',
        'membranas': 'Membranas',
        'separadores': 'Separadores',
        'fijaciones': 'Fijaciones'
    };

    return (
        <>
            <Helmet>
                <title>Materiales de Construcción en zona sur del Gran Buenos Aires | Darom SA</title>
                <meta name="description" content="Distribuidor mayorista de materiales para construcción en Mar del Plata. Productos de calidad al mejor precio. ¡Consultanos!" />
                <meta name="keywords" content="materiales construcción, corralón, ladrillos, cemento, hierros, áridos, materiales para construcción, viguetas, hidrofugos, mallas" />
                <link rel="canonical" href="https://daromsa.com.ar/materiales" />
            </Helmet>

            {/* Hero Section - Full Width Centrado con Badge Google */}
<div 
  className="heroc-section bg-dark text-white py-5 d-flex align-items-center" 
  style={{
    minHeight: '100vh',
    position: 'relative',
    backgroundImage: 'url(/portadacoralon.JPG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
    <Container>
        <div className="heroc-content text-center" style={{position: 'relative', zIndex: 2}}>
            <Row className="justify-content-center">
                <Col lg={8} xl={6}>
                    <h1 className="display-4 fw-bold mb-4">CONSTRUÍ SIN LÍMITES CON NUESTRO SOPORTE 360°</h1>
                    <p className="lead mb-4">Distribuidores mayoristas de materiales para la construcción en zona sur del Gran Buenos Aires</p>
                    
                    {/* Beneficios centrados */}
                    <div className="benefits-grid mb-4 mx-auto" style={{maxWidth: '800px'}}>
                        <Row className="g-3 justify-content-center">
                            {benefits.map((benefit, index) => (
                                <Col md={6} lg={5} key={index}>
                                    <div className="d-flex align-items-start px-3">
                                        <div className="benefit-icon me-2 text-danger">
                                            {benefit.icon}
                                        </div>
                                        <div className="text-start">
                                            <h5 className="fw-bold mb-1">{benefit.title}</h5>
                                            <p className="small mb-0">{benefit.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    
                    <div className="d-flex flex-column align-items-center">
                        <Button 
                            variant="danger" 
                            size="lg"
                            href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información" 
                            target="_blank"
                            className="mt-2 px-4 mb-3"
                        >
                            <FaWhatsapp className="me-2" /> SOLICITAR PRESUPUESTO
                        </Button>
                        
                        {/* Badge de Google moderno - Debajo del botón */}
                        <div className="google-rating-container" style={{zIndex: 3}}>
                          <a 
                            href="#reviews" 
                            className="d-inline-flex align-items-center text-decoration-none py-2 px-3"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              borderRadius: '20px',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                              transition: 'all 0.3s ease',
                              border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = 'none';
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                            }}
                          >
                            <div className="d-flex align-items-center me-2">
                              <svg width="30" height="30" viewBox="0 0 24 24" className="me-1">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" className="me-1">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                              </svg>
                              <span style={{
                                fontSize: '25px',
                                fontWeight: '700',
                                color: '#333',
                                marginRight: '4px'
                              }}>4.5</span>
                            </div>
                            <div style={{
                              fontSize: '12px',
                              color: '#555',
                              borderLeft: '1px solid #eee',
                              paddingLeft: '8px',
                              lineHeight: '1.2'
                            }}>
                              <div>+50 valoraciones</div>
                              <div style={{ fontSize: '11px' }}>Google</div>
                            </div>
                          </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
</div>
            

            {/* Product Categories */}
            <section className="categories-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5 text-start">Nuestros Productos</h2>
                    
                    <div className="category-selector mb-4">
                        <ButtonGroup className="flex-wrap">
                            {Object.keys(materiales).map((subrubro) => (
                                <Button
                                    key={subrubro}
                                    variant={selectedSubrubro === subrubro ? "danger" : "outline-dark"}
                                    onClick={() => handleSubrubroSelect(subrubro)}
                                    className="m-1 text-uppercase fw-bold"
                                >
                                    {subrubroNames[subrubro] || subrubro}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>

                    <SearchBar onSearch={handleSearch} className="mb-4" />

                    <Row>
                        {filteredProducts.slice(0, visibleProducts).map((material) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={material.id} className="mb-4">
                                <Card className="product-card h-100 shadow-sm border-0">
                                    <div className="product-badge bg-danger">OFERTA</div>
                                    <Card.Img 
                                        variant="top" 
                                        src={material.img} 
                                        alt={`Imagen de ${material.name}`} 
                                        loading="lazy" 
                                        className="product-image"
                                    />
                                    <Card.Body className="d-flex flex-column">
  <Card.Title className="product-title fw-bold">{material.name}</Card.Title>
  <div className="mt-auto">
    <Button
      variant="danger"
      size="sm"
      onClick={() => addToCart(material)} // Solo la acción del carrito
      className="w-100 fw-bold"
      block
    >
      Agregar al Carrito
    </Button>
  </div>
</Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {visibleProducts < filteredProducts.length && (
                        <div className="text-center mt-4">
                            <Button variant="outline-danger" onClick={handleLoadMore} className="fw-bold">
                                Ver más productos
                            </Button>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 bg-danger text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={8} className="text-start">
                            <h2 className="mb-3 fw-bold">¿Necesitás asesoramiento para tu proyecto?</h2>
                            <p className="lead mb-0">Nuestros expertos están listos para ayudarte a encontrar los materiales perfectos</p>
                        </Col>
                        <Col md={4} className="text-end">
                            <Button 
                                variant="light" 
                                size="lg" 
                                href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información" 
                                target="_blank"
                                className="fw-bold"
                            >
                                <FaWhatsapp /> Contactar Ahora
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Suppliers Section */}
            <section className="suppliers-section py-5 bg-white">
                <Container>
                    <h2 className="section-title mb-5 text-start">Empresas que confían en nosotros</h2>
                    <Carousel indicators={false} controls={suppliers.length > 4}>
                        {renderCarouselItems(suppliers)}
                    </Carousel>
                </Container>
            </section>

            {/* Testimonios - Carrusel Responsive */}
<section className="testimonials-section py-5 bg-light">
  <Container>
    <h2 className="section-title mb-5 text-start">Opiniones de nuestros clientes</h2>
    
    {/* Versión Desktop (3 testimonios por slide) */}
    <div className="d-none d-md-block">
      <Carousel indicators={false} interval={null} variant="dark">
        {[...Array(Math.ceil(testimonios.length / 3))].map((_, i) => (
          <Carousel.Item key={`desktop-${i}`}>
            <Row>
              {testimonios.slice(i * 3, i * 3 + 3).map((testimonio, idx) => (
                <Col md={4} key={`d-${i}-${idx}`}>
                  <Card className="testimonial-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <blockquote className="mb-0">
                        <p className="fst-italic">"{testimonio.text}"</p>
                        <footer className="blockquote-footer mt-3">
                          <strong>{testimonio.author}</strong>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

    {/* Versión Móvil (1 testimonio por slide) */}
    <div className="d-block d-md-none">
      <Carousel indicators={true} interval={5000}>
        {testimonios.map((testimonio, idx) => (
          <Carousel.Item key={`mobile-${idx}`}>
            <Card className="testimonial-card border-0 shadow-sm">
              <Card.Body className="p-4">
                <blockquote className="mb-0">
                  <p className="fst-italic">"{testimonio.text}"</p>
                  <footer className="blockquote-footer mt-3">
                    <strong>{testimonio.author}</strong>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </Container>
</section>
        </>
    );
}

export default Materiales;