"use client";
import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SearchResult from "./Searchresult";

const Dashboard = () => {
    const savedItems = [
        {
            title: "Item 1",
            url: "https://www.google.com/",
        },
        {
            title: "Item 2",
            url: "https://www.google.com/",
        },
        {
            title: "Item 3",
            url: "https://www.google.com/",
        },
    ];
    const groupItems = [
        { id: 1, name: "Group 1" },
        { id: 2, name: "Group 2" },
        { id: 3, name: "Group 3" },
    ]; // Replace with your actual saved items data
    const histItems = ["Item 1", "Item 2", "Item 3"]; // Replace with your actual saved items data
    /*const data = [
        {
            "id": ["http://arxiv.org/abs/1608.07166v1"],
            "updated": ["2016-08-25T14:24:38Z"],
            "published": ["2016-08-25T14:24:38Z"],
            "title": ["The Pegasus Tiles: an aperiodic pair of tiles"],
            "author": [
                {
                    name: ["Chaim Goodman-Strauss"],
                },
            ],
            "link": [
                {
                    $: {
                        href: "http://arxiv.org/abs/1608.07166v1",
                        rel: "alternate",
                        type: "text/html",
                    },
                },
                {
                    $: {
                        title: "pdf",
                        href: "http://arxiv.org/pdf/1608.07166v1",
                        rel: "related",
                        type: "application/pdf",
                    },
                },
            ],
            "arxiv:primary_category": [
                {
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                        "term": "math.CO",
                        "scheme": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "category": [
                {
                    $: {
                        term: "math.CO",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "abstract":
                "The Pegasus tiles are an aperiodic pair of tiles with tip to tip matching rules first drawn in 1996 We present them here",
        },
        {
            "id": ["http://arxiv.org/abs/2110.08325v1"],
            "updated": ["2021-10-15T19:23:33Z"],
            "published": ["2021-10-15T19:23:33Z"],
            "title": [
                "Minor Embedding in Broken Chimera and Pegasus Graphs is NP-complete",
            ],
            "author": [
                {
                    name: ["Elisabeth Lobe"],
                },
                {
                    name: ["Annette Lutz"],
                },
            ],
            "arxiv:comment": [
                {
                    _: "36 pages, 21 figures",
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "link": [
                {
                    $: {
                        href: "http://arxiv.org/abs/2110.08325v1",
                        rel: "alternate",
                        type: "text/html",
                    },
                },
                {
                    $: {
                        title: "pdf",
                        href: "http://arxiv.org/pdf/2110.08325v1",
                        rel: "related",
                        type: "application/pdf",
                    },
                },
            ],
            "arxiv:primary_category": [
                {
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                        "term": "quant-ph",
                        "scheme": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "category": [
                {
                    $: {
                        term: "quant-ph",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
                {
                    $: {
                        term: "cs.CC",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
                {
                    $: {
                        term: "68Q17, 05C83",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
                {
                    $: {
                        term: "F.2.2; G.2.2",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "abstract":
                "The embedding is an essential step when calculating on the DWave machine In this work we show the hardness of the embedding problem for both types of existing hardware represented by the Chimera and the Pegasus graphs containing unavailable qubits We construct certain broken Chimera graphs where it is hard to find a Hamiltonian cycle As the Hamiltonian cycle problem is a special case of the embedding problem this proves the general complexity result for the Chimera graphs By exploiting the subgraph relation between the Chimera and the Pegasus graphs the proof is then further extended to the Pegasus graphs",
        },
        {
            "id": ["http://arxiv.org/abs/1901.07636v1"],
            "updated": ["2019-01-22T22:46:13Z"],
            "published": ["2019-01-22T22:46:13Z"],
            "title": [
                "Pegasus: The second connectivity graph for large-scale quantum annealing\n  hardware",
            ],
            "author": [
                {
                    "name": ["Nike Dattani"],
                    "arxiv:affiliation": [
                        {
                            _: "Harvard",
                            $: {
                                "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                            },
                        },
                    ],
                },
                {
                    "name": ["Szilard Szalay"],
                    "arxiv:affiliation": [
                        {
                            _: "Wigner Research Centre",
                            $: {
                                "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                            },
                        },
                    ],
                },
                {
                    "name": ["Nick Chancellor"],
                    "arxiv:affiliation": [
                        {
                            _: "Durham",
                            $: {
                                "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                            },
                        },
                    ],
                },
            ],
            "arxiv:comment": [
                {
                    _: "Figures were made with our open source software PegasusDraw:\n  https://github.com/HPQC-LABS/PegasusDraw",
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "link": [
                {
                    $: {
                        href: "http://arxiv.org/abs/1901.07636v1",
                        rel: "alternate",
                        type: "text/html",
                    },
                },
                {
                    $: {
                        title: "pdf",
                        href: "http://arxiv.org/pdf/1901.07636v1",
                        rel: "related",
                        type: "application/pdf",
                    },
                },
            ],
            "arxiv:primary_category": [
                {
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                        "term": "quant-ph",
                        "scheme": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "category": [
                {
                    $: {
                        term: "quant-ph",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
                {
                    $: {
                        term: "cs.DM",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
                {
                    $: {
                        term: "cs.ET",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
                {
                    $: {
                        term: "05C50, 11A41, 11A51, 11N35, 11N36, 11N80, 11Y05, 65K10, 65P10,\n  65Y20, 68Q12, 81P68, 81P94, 94A60, 81-08",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
                {
                    $: {
                        term: "B.2.4; B.8.2; C.1.3; C.1.m; F.2.1; F.2.3; F.4.1; G.1.0; G.1.3;\n  G.1.5; G.1.6; G.2.0; G.2.1; I.1.2; I.6.4; C.4; E.3; G.0; J.2; K.2",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "abstract":
                "Pegasus is a graph which offers substantially increased connectivity between the qubits of quantum annealing hardware compared to the graph Chimera It is the first fundamental change in the connectivity graph of quantum annealers built by DWave since Chimera was introduced in 2009 and then used in 2011 for DWaves first commercial quantum annealer In this article we describe an algorithm which defines the connectivity of Pegasus and we provide what we believe to be the best way to graphically visualize Pegasus in order to see which qubits couple to each other As supplemental material we provide a wide variety of different visualizations of Pegasus which expose different properties of the graph in different ways We provide an open source code for generating the many depictions of Pegasus that we show",
        },
        {
            "id": ["http://arxiv.org/abs/2111.11624v1"],
            "updated": ["2021-11-23T03:05:49Z"],
            "published": ["2021-11-23T03:05:49Z"],
            "title": [
                "Astronomical Image Processing at Scale With Pegasus and Montage",
            ],
            "author": [
                {
                    name: ["G. Bruce Berriman"],
                },
                {
                    name: ["John C. Good"],
                },
                {
                    name: ["Ewa Deelman"],
                },
                {
                    name: ["Ryan Tanaka"],
                },
                {
                    name: ["Karan Vahi"],
                },
            ],
            "arxiv:comment": [
                {
                    _: "4 pages, 1 figure, Proceedings of ADASS XXXI",
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "link": [
                {
                    $: {
                        href: "http://arxiv.org/abs/2111.11624v1",
                        rel: "alternate",
                        type: "text/html",
                    },
                },
                {
                    $: {
                        title: "pdf",
                        href: "http://arxiv.org/pdf/2111.11624v1",
                        rel: "related",
                        type: "application/pdf",
                    },
                },
            ],
            "arxiv:primary_category": [
                {
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                        "term": "astro-ph.IM",
                        "scheme": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "category": [
                {
                    $: {
                        term: "astro-ph.IM",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "abstract":
                "Image processing at scale is a powerful tool for creating new data sets and integrating them with existing data sets and performing analysis and quality assurance investigations Workflow managers offer advantages in this type of processing which involves multiple data access and processing steps Generally they enable automation of the workflow by locating data and resources recovery from failures and monitoring of performance In this focus demo we demonstrate how the Pegasus Workflow Manager Python API manages image processing to create mosaics with the Montage Image Mosaic engine Since 2001 Pegasus has been developed and maintained at USCISI Montage was in fact one of the first applications used to design Pegasus and optimize its performance Pegasus has since found application in many areas of science LIGO exploited it in making discoveries of black holes The Vera C Rubin Observatory used it to compare the cost and performance of processing images on cloud platforms While these are examples of projects at large scale small team investigations on local clusters of machines can benefit from Pegasus as well",
        },
        {
            "id": ["http://arxiv.org/abs/1503.08268v2"],
            "updated": ["2015-04-15T00:00:59Z"],
            "published": ["2015-03-28T05:42:52Z"],
            "title": [
                "A Hero's Dark Horse: Discovery of an Ultra-Faint Milky Way Satellite in\n  Pegasus",
            ],
            "author": [
                {
                    name: ["Dongwon Kim"],
                },
                {
                    name: ["Helmut Jerjen"],
                },
                {
                    name: ["Dougal Mackey"],
                },
                {
                    name: ["Gary S. Da Costa"],
                },
                {
                    name: ["Antonino P. Milone"],
                },
            ],
            "arxiv:doi": [
                {
                    _: "10.1088/2041-8205/804/2/L44",
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "link": [
                {
                    $: {
                        title: "doi",
                        href: "http://dx.doi.org/10.1088/2041-8205/804/2/L44",
                        rel: "related",
                    },
                },
                {
                    $: {
                        href: "http://arxiv.org/abs/1503.08268v2",
                        rel: "alternate",
                        type: "text/html",
                    },
                },
                {
                    $: {
                        title: "pdf",
                        href: "http://arxiv.org/pdf/1503.08268v2",
                        rel: "related",
                        type: "application/pdf",
                    },
                },
            ],
            "arxiv:comment": [
                {
                    _: "5 pages, 4 figures, 1 table. Accepted for publication in ApJL",
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "arxiv:primary_category": [
                {
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                        "term": "astro-ph.GA",
                        "scheme": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "category": [
                {
                    $: {
                        term: "astro-ph.GA",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "abstract":
                "We report the discovery of an ultrafaint Milky Way satellite galaxy in the constellation of Pegasus The concentration of stars was detected by applying our overdensity detection algorithm to the SDSSDR 10 and confirmed with deeper photometry from the Dark Energy Camera at the 4m Blanco telescope Fitting model isochrones indicates that this object Pegasus III features an old and metalpoor stellar population FeHsim21 at a heliocentric distance of 205pm20 kpc The new stellar system has an estimated halflight radius of r_h7830_24 pc and a total luminosity of M_Vsim41pm05 that places it into the domain of dwarf galaxies on the sizeluminosity plane Pegasus III is spatially close to the MW satellite Pisces II It is possible that the two might be physically associated similar to the Leo IV and Leo V pair Pegasus III is also well aligned with the Vast Polar Structure which suggests a possible physical association",
        },
    ];*/
    const pub=[
        {
            "id": ["http://arxiv.org/abs/1608.07166v1"],
            "updated": ["2016-08-25T14:24:38Z"],
            "published": ["2016-08-25T14:24:38Z"],
            "title": ["The Pegasus Tiles: an aperiodic pair of tiles"],
            "author": [
                {
                    name: ["Chaim Goodman-Strauss"],
                },
            ],
            "link": [
                {
                    $: {
                        href: "http://arxiv.org/abs/1608.07166v1",
                        rel: "alternate",
                        type: "text/html",
                    },
                },
                {
                    $: {
                        title: "pdf",
                        href: "http://arxiv.org/pdf/1608.07166v1",
                        rel: "related",
                        type: "application/pdf",
                    },
                },
            ],
            "arxiv:primary_category": [
                {
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                        "term": "math.CO",
                        "scheme": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "category": [
                {
                    $: {
                        term: "math.CO",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "abstract":
                "The Pegasus tiles are an aperiodic pair of tiles with tip to tip matching rules first drawn in 1996 We present them here",
        }
        
    ]

    return (
        <>
            <div className="text-white w-full h-max grid-container grid grid-cols-10 grid-rows-2 gap-1">
                <div className="grid-item bg-black p-4 col-span-2 row-span-1 rounded-bl-md rounded-br-md">
                    <h3 className="text-2xl font-semibold mb-2">Saved</h3>
                    <ul>
                        {savedItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.url}
                                    passHref
                                    legacyBehavior>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid-item bg-inherit  p-4 col-span-6 row-span-2">
                    <h3 className="text-center text-4xl font-semibold mb-2">
                        Find your paper here..
                    </h3>
                    <SearchBar />
                    <div className="max-h-96 overflow-y-auto">
                        <SearchResult data={pub} />
                    </div>
                </div>
                <div className="grid-item bg-black  p-4 col-span-2 row-span-2 rounded-bl-xl rounded-br-xl">
                    <h3 className="text-4xl font-semibold mb-2">History</h3>
                    <ul>
                        {histItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="grid-item bg-black  p-4 col-span-2 row-span-1 rounded-md ">
                    <h3 className="text-2xl font-semibold mb-2">Groups</h3>
                    <ul>
                        {groupItems.map((item, index) => (
                            <Link
                                href={`/groups/${item.name}`}
                                groupName={item}>
                                <li key={index}>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
