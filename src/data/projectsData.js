/**
 * Project data — single source of truth.
 *
 * Each project has an optional `sections` array for the detail page.
 * Section types:
 *   { type: 'image',                  src, alt, size: 'full'|'medium'|'small', caption? }
 *   { type: 'image-pair',             left: { src, alt, caption? }, right: { src, alt, caption? } }
 *   { type: 'text',                   heading?, body }
 *   { type: 'image-left-text-right',  image: { src, alt, caption? }, heading?, body }
 *   { type: 'text-left-image-right',  image: { src, alt, caption? }, heading?, body }
 *   { type: 'quote',                  body, attribution? }
 */

const projects = [
  {
    id: 0,
    slug: 'negotiation-city',
    title: 'Negotiation City',
    year: '2024',
    program: 'Urban Design',
    category: 'Urban Design',
    location: 'Seoul, Korea',
    thumbnail: '/images/projects/negotiation-city/cover.webp',
    description:
      "Negotiation City explores the contested boundaries between public and private space in Seoul's rapidly transforming urban fabric. The project proposes a series of negotiated thresholds between institutions, residents, and infrastructure.",
    sections: [
      // 1. Hero Cover Image (Main 1 render, Full width)
      {
        type: 'image',
        src: '/images/projects/negotiation-city/cover.webp',
        alt: 'Negotiation City — Main Perspective 1',
        size: 'full',
      },

      // 2. The Problem + Concept Diagram (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'Traditional Planning Limitations',
        body: "As cities have developed into complex, living organisms, traditional urban planning has evolved mostly based on 2D zoning models like the Garden City, Neighbourhood Unit, and Super Block. While iconic in their respective eras, new desires continually emerge in city life, causing these static frameworks to fail. Merely layering new requirements onto rigid 2D plans falls short of creating a truly adaptive city for everyone.",
        image: {
          src: '/images/projects/negotiation-city/concept_diagram.webp',
          alt: 'Concept Diagram',
          caption: 'Critique of traditional 2D zoning and evolution of urban desires.',
        }
      },

      // 3. The Response + Concept Vertical (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'The Response',
        body: "We believe urban planning must anticipate and integrate the ever-changing desires of residents right from the initial planning stage. We propose two core concepts: a physical concept where various programs interlock like Tetris blocks to create complex forms, and a system concept where the city immediately responds to residents' needs, fostering continuous negotiation among stakeholders to shape an ideal environment.",
        image: {
          src: '/images/projects/negotiation-city/concept_vertical.webp',
          alt: 'Concept Vertical representation',
          caption: 'Concept: Physical interlocking forms and responsive systems.',
        }
      },

      // 4. Modular & Sunlight (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/negotiation-city/modular_system.webp',
          alt: 'Modular System',
          caption: 'Physical modularity - interlocking program blocks.',
        },
        right: {
          src: '/images/projects/negotiation-city/sunlight_analysis.webp',
          alt: 'Sunlight analysis diagram',
          caption: 'Solar exposure and microclimate performance mapping.',
        }
      },

      // 5. Rule Book & Scenario (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/negotiation-city/rule_book.webp',
          alt: 'Rule Book',
          caption: 'Negotiation Rule Book for stakeholders.',
        },
        right: {
          src: '/images/projects/negotiation-city/scenario.webp',
          alt: 'Scenario',
          caption: 'Urban expansion and spatial negotiation scenario.',
        }
      },

      // 6. Isometric System Overview (Full width)
      {
        type: 'image',
        src: '/images/projects/negotiation-city/system_axonometric.webp',
        alt: 'System Axonometric',
        size: 'full',
        caption: '3D zoning grid and modular infrastructure connection.',
      },

      // 7. Main 2 Render (Full width)
      {
        type: 'image',
        src: '/images/projects/negotiation-city/main_2.webp',
        alt: 'Negotiation City — Main Perspective 2',
        size: 'full',
        caption: 'Interconnected timber modules forming complex, high-density residential and community clusters.',
      },

      // 8. Project Quote/Manifesto
      {
        type: 'quote',
        body: "A city that immediately responds to residents' needs, where every building mass is shaped through ongoing collaboration and negotiation based on stakeholders' interests.",
        attribution: 'Negotiation City Manifesto',
      },

      // 9. Program Section (Medium centered)
      {
        type: 'image',
        src: '/images/projects/negotiation-city/program_section.webp',
        alt: 'Program Section',
        size: 'medium',
        caption: 'Program section — vertical distribution of residential, commercial, and public functions.',
      },

      // 10. Main Section (Medium centered)
      {
        type: 'image',
        src: '/images/projects/negotiation-city/main_section.webp',
        alt: 'Main Section',
        size: 'medium',
        caption: 'Main section — timber modular structures and interconnected skywalks.',
      },

      // 11. View 1 Render (Medium centered)
      {
        type: 'image',
        src: '/images/projects/negotiation-city/view_1.webp',
        alt: 'View 1 perspective rendering',
        size: 'medium',
        caption: 'Street-level perspective showing modular connections and public spaces.',
      },

      // 12. View 2 & View 3 (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/negotiation-city/view_2.webp',
          alt: 'View 2',
          caption: 'Timber module facade and structural detailing.',
        },
        right: {
          src: '/images/projects/negotiation-city/view_3.webp',
          alt: 'View 3',
          caption: 'Elevated green pathways connecting modules across blocks.',
        }
      },
    ],
  },
  {
    id: 1,
    slug: 'yongsan-riverway',
    title: 'Yongsan Riverway',
    year: '2023',
    program: 'Urban Design',
    category: 'Urban Design',
    location: 'Seoul, Korea',
    thumbnail: '/images/projects/yongsan-riverway/cover.webp',
    description:
      'Yongsan Riverway reimagines the post-industrial waterfront of Yongsan as a continuous ecological corridor linking the Han River to the city center, utilizing district waste heat and data center integration.',
    sections: [
      // 1. Hero Cover Image (Full width)
      {
        type: 'image',
        src: '/images/projects/yongsan-riverway/cover.webp',
        alt: 'Yongsan Riverway — Waterfront perspective',
        size: 'full',
      },

      // 2. Introduction Text
      {
        type: 'text',
        heading: 'The Concept',
        body: 'This project started with the vision of creating a large-scale tourism district in Yongsan, right where the Mancho Stream meets the Han River. Focusing on the revitalization of the Mancho Stream, the design envisions a sustainable waterfront development seamlessly integrated with the Han River. The design utilizes advanced energy systems like data centers and district cooling technologies to meet rising data processing demands, while recycling waste heat for district heating and cooling systems.'
      },

      // 3. Waterfront Precedents Intro
      {
        type: 'text',
        heading: 'Waterfront Precedents',
        body: 'We analyzed key global waterfront models — Seoul, Paris, London, Hamburg, Amsterdam, and Copenhagen — to understand how historic cities leverage rivers and canals as public resources. The design applies these lessons to create a continuous ecological and community connection.'
      },

      // 4. Case Studies (6 in a row)
      {
        type: 'image-row',
        images: [
          {
            src: '/images/projects/yongsan-riverway/case_seoul.webp',
            alt: 'Seoul',
            caption: 'Seoul',
          },
          {
            src: '/images/projects/yongsan-riverway/case_paris.webp',
            alt: 'Paris',
            caption: 'Paris',
          },
          {
            src: '/images/projects/yongsan-riverway/case_london.webp',
            alt: 'London',
            caption: 'London',
          },
          {
            src: '/images/projects/yongsan-riverway/case_hamburg.webp',
            alt: 'Hamburg',
            caption: 'Hamburg',
          },
          {
            src: '/images/projects/yongsan-riverway/case_amsterdam.webp',
            alt: 'Amsterdam',
            caption: 'Amsterdam',
          },
          {
            src: '/images/projects/yongsan-riverway/case_copenhagen.webp',
            alt: 'Copenhagen',
            caption: 'Copenhagen',
          },
        ]
      },

      // 7. Concept Drawing (Medium centered)
      {
        type: 'image',
        src: '/images/projects/yongsan-riverway/concept_drawing.webp',
        alt: 'Final Concept Drawing',
        size: 'medium',
        caption: 'Conceptual scheme integrating waterfront circulation and river flow.',
      },

      // 8. Site & Infrastructure (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'Infrastructure & Site',
        body: 'By transforming the Mancho Stream into a functional and ecological corridor, the project enhances biodiversity while creating vibrant public spaces within each designated zone. This water network serves as the spine of the site\'s public infrastructure, acting as a catalyst for social and environmental interaction. Program distribution is carefully planned taking into account Floor Area Ratio (FAR), energy efficiency, and the unique character of each zone.',
        image: {
          src: '/images/projects/yongsan-riverway/site_analysis.webp',
          alt: 'Site Analysis Map',
          caption: 'Site analysis mapping transportation networks and energy distribution.',
        }
      },

      // 9. Gangbyeonbuk-ro Connection + Map (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Overcoming Barriers',
        body: 'An elevated connector spanning Gangbyeonbuk-ro resolves the existing physical disconnection between the city center and the waterfront. This pedestrian deck serves as a hub for public activities and community space, integrating dynamic programs to ensure physical and social connectivity.',
        image: {
          src: '/images/projects/yongsan-riverway/transportation_map.webp',
          alt: 'Seoul Transportation Map',
          caption: 'Regional transport connections linking the site to the urban core.',
        }
      },

      // 10. Massing Process Diagrams 1 & 2 (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/yongsan-riverway/mass_1.webp',
          alt: 'Mass Process Diagram 1',
          caption: 'Step 1: Volumetric programming based on zoning grid.',
        },
        right: {
          src: '/images/projects/yongsan-riverway/mass_2.webp',
          alt: 'Mass Process Diagram 2',
          caption: 'Step 2: Carving pathways for wind and visual corridors.',
        }
      },

      // 11. Massing Process Diagrams 3 & 4 (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/yongsan-riverway/mass_3.webp',
          alt: 'Mass Process Diagram 3',
          caption: 'Step 3: Staggering levels to maximize solar exposure.',
        },
        right: {
          src: '/images/projects/yongsan-riverway/mass_4.webp',
          alt: 'Mass Process Diagram 4',
          caption: 'Step 4: Landscape integration and green roof systems.',
        }
      },

      // 12. Skyline Elevation (Full width)
      {
        type: 'image',
        src: '/images/projects/yongsan-riverway/skyline.webp',
        alt: 'Skyline Elevation Diagram',
        size: 'full',
        caption: 'Riverfront skyline elevation highlighting stepped building masses and vertical gardens.',
      },

      // 13. Plot Plan Layout (Full width)
      {
        type: 'image',
        src: '/images/projects/yongsan-riverway/plot_plan.webp',
        alt: 'Plot Plan Layout',
        size: 'full',
        caption: 'Plot plan showing pedestrian paths, water inlets, and building footprints.',
      },

      // 14. Quote/Vision Statement
      {
        type: 'quote',
        body: 'Ecological sustainability, urban resilience, and enhanced connectivity combined to transform the site into a forward-looking tourism hub.',
        attribution: 'Yongsan Riverway Vision',
      },

      // 15. Zone Renderings 1 & 2 (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/yongsan-riverway/zone_1.webp',
          alt: 'Zone 1 Perspective',
          caption: 'Zone 1: Urban park and public commercial promenade.',
        },
        right: {
          src: '/images/projects/yongsan-riverway/zone_2.webp',
          alt: 'Zone 2 Perspective',
          caption: 'Zone 2: Data center cooling ponds and ecological wetlands.',
        }
      },

      // 16. Zone Rendering 3 (Medium centered)
      {
        type: 'image',
        src: '/images/projects/yongsan-riverway/zone_3.webp',
        alt: 'Zone 3 Perspective',
        size: 'medium',
        caption: 'Zone 3: Public cultural plaza and Han River observation deck.',
      },
    ],
  },
  {
    id: 2,
    slug: 'living-loop',
    title: 'Living Loop',
    year: '2023',
    program: 'Collective Housing & Waste Infrastructure',
    category: 'Architecture',
    location: 'Seoul, Korea',
    thumbnail: '/images/projects/living-loop/main_render.webp',
    description:
      'Living Loop is a sustainable apartment prototype that integrates high-density collective housing with decentralized waste-to-energy infrastructure, proposing a circular ecology for Central Seoul.',
    sections: [
      // 1. Hero Cover Image (Full width)
      {
        type: 'image',
        src: '/images/projects/living-loop/main_render.webp',
        alt: 'Living Loop — night rendering',
        size: 'full',
      },

      // 2. Agenda (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Climate Adaptation',
        body: 'Climate change is one of the most critical challenges facing the world today. Architects and urban planners are making diverse efforts to reduce carbon footprints, and policies for sustainable building design are becoming increasingly essential.\n\nResponding to the theme of "Climate Adaptation" at the UIA Global Student Summit, this project proposes a new apartment prototype that integrates collective housing — Korea\'s most common residential type — with local waste processing facilities to mitigate environmental impacts.',
        image: {
          src: '/images/projects/living-loop/slide_01.webp',
          alt: 'Vertical collage diagram',
          caption: 'Vertical collage: combining housing and infrastructure.',
        }
      },

      // 3. Korea's Landfill Crisis (Image Pair + Text)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/living-loop/slide_02_map.webp',
          alt: 'Korea landfill map',
          caption: 'Landfill distribution across South Korea.',
        },
        right: {
          src: '/images/projects/living-loop/slide_02_diagram.webp',
          alt: 'Methane gas emission diagram',
          caption: 'Conventional landfill methane gas generation process.',
        }
      },
      {
        type: 'text',
        heading: 'Korea\'s Landfill Crisis',
        body: 'The map of South Korea indicates waste landfill sites across the country. Light blue marks landfills equipped with resource-recovery facilities to convert waste into energy, while dark blue represents sites operating without such facilities. A significant number of landfills lack resource-recovery systems due to high construction costs.\n\nConsequently, many landfills located in mountainous areas release methane gas directly into the atmosphere, accelerating global warming.',
      },

      // 4. Seoul's Waste Challenge (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'Seoul\'s Waste Challenge',
        body: 'Seoul, a metropolis of 10 million people, generates 4 million tons of waste annually (approximately 11,000 tons per day). Currently, this waste is transported to the Incheon Metropolitan Landfill, located 1.5 hours away, raising concerns about transportation costs and efficiency.\n\nAs the Incheon landfill nears its maximum capacity, Seoul faces the urgent need for a new waste management solution. Simply finding another remote landfill site is not a sustainable answer.',
        image: {
          src: '/images/projects/living-loop/slide_03.webp',
          alt: 'Seoul waste disposal map and charts',
          caption: 'Analysis of waste generation in Seoul\'s districts.',
        }
      },

      // 5. Concept Flowchart (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Decentralized Circulation',
        body: 'Waste is categorized into household, industrial, and construction waste. Conventionally, all waste is collected, sorted at centralized facilities, and then recycled, landfilled, or incinerated.\n\nBy introducing a decentralized waste circulation and recovery system within the city center, we can process waste locally from collection to electricity generation. Integrating this infrastructure directly into collective housing forms a closed-loop system, running from waste disposal to power generation.',
        image: {
          src: '/images/projects/living-loop/slide_04.webp',
          alt: 'Decentralized waste disposal flowchart',
          caption: 'Closed-loop system process flowchart.',
        }
      },

      // 6. Project Quote/Manifesto
      {
        type: 'quote',
        body: 'Living Loop represents a sustainable vision for collective housing 100 years from now, transforming municipal waste management into community-centric infrastructure.',
        attribution: 'UIA 2023 Copenhagen Global Student Summit',
      },

      // 7. Vertical Landfill Prototype (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'The Vertical Landfill Block',
        body: 'We explored which residential typology would be most suitable to integrate with this decentralized system, and selected the high-rise apartment block — the representative housing type in South Korea. By leveraging the verticality inherent in apartment typology, we propose a new prototype: a "Vertical Landfill" integrated with high-rise apartments.',
        image: {
          src: '/images/projects/living-loop/slide_05.webp',
          alt: 'Korea residential typology diagram',
          caption: 'Korean residential typology analysis and statistics.',
        }
      },

      // 8. Site Context: Eunma (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Site Context: Eunma Apartment',
        body: 'The project is sited at the Eunma Apartment complex in Gangnam, a high-density district with significant waste output. Built 44 years ago, this aging complex is currently planning a major redevelopment. We propose Eunma as the first prototype site, establishing a model that can be applied to other aging, high-density residential complexes throughout Seoul facing redevelopment.',
        image: {
          src: '/images/projects/living-loop/slide_06.webp',
          alt: 'Eunma Apartment site context map',
          caption: 'Eunma Apartment context map, Gangnam, Seoul.',
        }
      },

      // 9. Program & Density Revitalization (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'Redistributing Vitality',
        body: 'Eunma Apartment is currently a massive complex composed of 4,424 units across two layout types. Despite its prime location, the aging infrastructure has led to a declining occupancy rate. However, the commercial center, Eunma Sangga, remains highly active.\n\nBy analyzing the program distribution of Eunma Sangga, this master plan redistributes these commercial and community spaces throughout the new residential prototype to revitalize the entire neighborhood.',
        image: {
          src: '/images/projects/living-loop/slide_07.webp',
          alt: 'Eunma Apartment site current condition layout',
          caption: 'Existing Eunma layout and Eunma Sangga commercial ratios.',
        }
      },

      // 10. Apartment Unit Analysis (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Revising the Unit Plan',
        body: 'The current unit configurations of Eunma Apartment are adapted into modern tower-type layouts. Through refined unit clustering and structural core planning, the new prototype establishes flexible, efficient housing plans suitable for vertical living.',
        image: {
          src: '/images/projects/living-loop/slide_08.webp',
          alt: 'Existing vs proposed unit plans comparison',
          caption: 'Existing unit plans vs. proposed modular unit tower layouts.',
        }
      },

      // 11. Drawings: Massing Process (Medium centered)
      {
        type: 'image',
        src: '/images/projects/living-loop/slide_09.webp',
        alt: 'Massing process and service piping',
        size: 'medium',
        caption: 'Massing process, service pipe integration, and functional layers.',
      },
      {
        type: 'text',
        heading: 'The Language of Pipes',
        body: 'The building massing is designed to facilitate local waste recovery. Waste and graywater travel through visible Waste Chute, Plumbing, and Handrail pipes to the integrated Energy Factory. In line with modern residential trends, community amenities are placed on intermediate and upper levels. Residents can observe the waste-to-energy conversion process directly from public gardens, turning structural services into an architectural language that shapes the facade.',
      },

      // 12. Drawings: Oblique Floor Plans (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Oblique Plan Analysis',
        body: 'Each residential floor comprises four units. Residents sort their waste in the chute room next to the vertical core, dropping it directly into the Waste Chute to travel down to the Energy Factory.\n\nWastewater moves through plumbing pipes to the drainage tank for purification, converting it into recycled water for gardens and household flushing.',
        image: {
          src: '/images/projects/living-loop/slide_10.webp',
          alt: 'Oblique isometric floor plan cut section',
          caption: 'Oblique isometric view of the residential and service core levels.',
        }
      },

      // 13. Factory Layer & Community Space (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'The Energy Factory & Public Domain',
        body: 'The structural layering places the Energy Factory beneath public outdoor auditoriums and gardens, creating a harmonious public realm. Spacing out residential units allows vertical greenery to grow across terraces. The Energy Factory is integrated with gardens and community areas, making it a place of education and social gathering rather than a hidden utility.',
        image: {
          src: '/images/projects/living-loop/factory_render.webp',
          alt: 'Energy factory rendering with public outdoor auditorium',
          caption: 'The Factory layer: waste-to-energy facilities beneath public community levels.',
        }
      },

      // 14. Garden Level View (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'Community Gardens',
        body: 'A close-up view of the garden levels showing the interaction between residential spaces, structural columns, and landscaped spaces. Terraced balconies allow residents to grow private gardens, utilizing compost and soil generated as byproducts of the landfill capsule\'s treatment process.',
        image: {
          src: '/images/projects/living-loop/garden_render.webp',
          alt: 'Garden level close-up perspective render',
          caption: 'Integrated gardens and public spaces in the middle of towers.',
        }
      },

      // 15. Master Plan Layout (Medium Image)
      {
        type: 'image',
        src: '/images/projects/living-loop/master_plan.webp',
        alt: 'Master plan overview render',
        size: 'medium',
        caption: 'Aerial master plan showing the configuration of tower types and public open spaces.',
      },

      // 16. Underground Connection (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Pedestrian Flow & Ground Plane',
        body: 'The ground level features open pedestrian connections, linking the residential towers with the surrounding public spaces. The column grid opens up to allow free pedestrian movement under the towers, keeping the ground plane completely permeable.',
        image: {
          src: '/images/projects/living-loop/under_render.webp',
          alt: 'Ground level pedestrian pathways render',
          caption: 'Ground floor plaza: fluid pedestrian paths beneath pilotis towers.',
        }
      },
    ],
  },
  {
    id: 3,
    slug: 'sewoon-modular-urbanism',
    title: 'Sewoon Modular Urbanism',
    year: '2026',
    program: 'Adaptive Reuse / Urban Design',
    category: 'Architecture',
    location: 'Seoul, Korea',
    thumbnail: '/images/projects/sewoon/cover.webp',
    description:
      'Rather than demolishing Sewoon Sangga, this project preserves the 1km megastructure and clears its surroundings to restore the severed Jongmyo-Namsan green axis. Data-driven density mapping determines building massing, program distribution, and a pixelated modular grid. The result is a continuous landscape-park where industry, housing, and public space coexist around the clock.',
    sections: [
      // 1. Hero Cover Image (Full width)
      {
        type: 'image',
        src: '/images/projects/sewoon/cover.webp',
        alt: 'Sewoon Modular Urbanism — aerial perspective',
        size: 'full',
      },

      // 2. The Problem + Regional Analysis Map (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'The Problem',
        body: 'Sewoon Sangga sits at the center of Seoul, stretching 1km through the urban core. Despite its strategic position at the intersection of five metro lines, it remains severed from the city — a relic left in limbo for decades while Seoul debated what to do with its aging megastructure.',
        image: {
          src: '/images/projects/sewoon/regional_analysis.webp',
          alt: 'Regional analysis — transit nodes and green space distribution',
          caption: 'Regional transit nodes and green space connectivity.',
        }
      },

      // 3. Layer Analysis + Site Analysis Diagram (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Layer Analysis',
        body: 'The site was examined through three analytical layers. First, green and open spaces: a north-south green axis running from Jongmyo to Namsan passes directly through the site. Second, commercial activity and population density: tourist zones, densely populated areas, and deep commercial hinterlands. Third, solar exposure and road conditions: Cheonggyecheon crosses east-west, and southern solar access is favorable.',
        image: {
          src: '/images/projects/sewoon/site_analysis.webp',
          alt: 'Three-layer site analysis',
          caption: 'Analytical layers: green, commercial, and road conditions.',
        }
      },

      // 4. The Green Deficit + Building Age (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'The Green Deficit',
        body: 'The area around the site ranks near the bottom citywide in green coverage. Jongno 1·2·3·4-ga-dong appears to have 29% greenery on paper, but this includes Jongmyo Shrine and the foothills of Bugaksan — the site itself is virtually devoid of any green space. This is the most green-deficient zone in central Seoul, and this is where the project begins.',
        image: {
          src: '/images/projects/sewoon/building_age.webp',
          alt: 'Building age and green ratio analysis',
          caption: 'Building age survey and green ratio distribution.',
        }
      },

      // 5. Inverting the Plan + Vision Rendering (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Inverting the Plan',
        body: "Seoul's current plan demolishes Sewoon Sangga and inserts a linear park, then surrounds it with high-rise redevelopment. This approach erases sixty years of accumulated industrial ecology and traps greenery along the central axis while high-rise walls block public access from surrounding streets.\n\nOur approach inverts this logic. The megastructure is preserved; its surroundings are cleared. The cleared land becomes park. Sewoon Sangga is redefined as a new urban platform within that park.",
        image: {
          src: '/images/projects/sewoon/vision.webp',
          alt: 'Project vision — Jongmyo to Namsan green axis restoration',
          caption: 'Restoring the severed green axis with Sewoon as its living core.',
        }
      },

      // 6. Project Quote/Manifesto
      {
        type: 'quote',
        body: 'A park that is not empty. A commercial district that is not closed. A city where industry and green space coexist on a sixty-year-old axis, reconnecting Jongmyo to Namsan.',
        attribution: 'Project Vision Statement',
      },

      // 7. Concept Diagram (Medium centered)
      {
        type: 'image',
        src: '/images/projects/sewoon/concept_diagram.webp',
        alt: 'Concept diagram',
        size: 'medium',
        caption: 'Concept diagram — preserve the megastructure, clear the periphery, restore the axis.',
      },

      // 8. Data-Driven Density Intro Text
      {
        type: 'text',
        heading: 'Data-Driven Density',
        body: "To determine program types and building density logically, three evaluation axes were established: openness, commerciality (mapped via QGIS), and accessibility to transit nodes. A weighted matrix scores each axis from 0 to 1. Positive weights increase density in active commercial zones; negative weights reduce density near transit hubs to maintain pedestrian flow. The resulting density map becomes the foundation for all subsequent massing and program placement.",
      },

      // 9. Data Analysis & Processing (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/sewoon/data_analysis.webp',
          alt: 'Data analysis — openness, commerciality, accessibility',
          caption: 'Openness, commerciality, and accessibility axes.',
        },
        right: {
          src: '/images/projects/sewoon/data_process.webp',
          alt: 'Data processing and weighted matrix',
          caption: 'Weighted matrix (red = high density, blue = low).',
        }
      },

      // 10. Density Result Map (Medium centered)
      {
        type: 'image',
        src: '/images/projects/sewoon/data_conclusion.webp',
        alt: 'Final density distribution',
        size: 'medium',
        caption: 'Final density distribution — darker tones indicate higher building density, lighter tones indicate open space.',
      },

      // 11. Design Rules Intro Text
      {
        type: 'text',
        heading: 'Design Rules',
        body: "The design operates through spatial rules. Primary transit nodes are connected by open space. High-density areas incorporate sunken courts for daylighting. Where massing meets roads or waterways, ground-level pass-throughs are permitted. Existing Sewoon industries are placed adjacent to the megastructure, while peripheral programs reference the commercial character of the facing street.",
      },

      // 12. Design Rules & circulation maps (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/sewoon/design_process.webp',
          alt: 'Design process — node connections and open space',
          caption: 'Programmatic placement and node network.',
        },
        right: {
          src: '/images/projects/sewoon/design_process_2.webp',
          alt: 'Pedestrian circulation hierarchy',
          caption: 'Pedestrian loops, secondary paths, and rooftop circulation.',
        },
      },

      // 13. Pixelated Grid (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Pixelated Grid',
        body: 'Applying data-driven curves to the site required a method of regularization. A 10m base grid was established across the site, allowing curved density surfaces to be discretized into stackable modules measuring 10m × 10m × 3m.',
        image: {
          src: '/images/projects/sewoon/grid.webp',
          alt: '10m grid system and form generation',
          caption: 'Discretizing curved density surfaces into modular building blocks.',
        }
      },

      // 14. Module Types Diagram (Medium centered)
      {
        type: 'image',
        src: '/images/projects/sewoon/module_types.webp',
        alt: 'Module typology — mass, stair, and paving',
        size: 'medium',
        caption: 'Module catalogue — mass modules, three stair types, and paving variations.',
      },

      // 15. Program Distribution Diagram (Medium centered)
      {
        type: 'image',
        src: '/images/projects/sewoon/program.webp',
        alt: 'Program distribution',
        size: 'medium',
        caption: 'Program distribution — modules accommodate varied interior programs and exterior plazas.',
      },

      // 16. 24-Hour Sewoon + Housing (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: '24-Hour Sewoon',
        body: "To keep the district active 24/7, floors 2–4 of the megastructure are converted into compact housing units (5m-wide modules) for young workers and local employees. Ground floors host community programs, and the upper floors (5–8) are removed to create a public rooftop green space.",
        image: {
          src: '/images/projects/sewoon/24h_sewoon.webp',
          alt: '24-hour activation — housing and community programming',
          caption: 'Residential units in floors 2–4 sustain continuous district activity.',
        }
      },

      // 17. Housing Module Desc (Medium centered)
      {
        type: 'image',
        src: '/images/projects/sewoon/housing_module_desc.webp',
        alt: 'Housing module detail',
        size: 'medium',
        caption: 'Housing module — 5m-wide units combine into terraced dwelling clusters.',
      },

      // 18. Zoning & Masterplan (Side-by-side pair)
      {
        type: 'image-pair',
        left: {
          src: '/images/projects/sewoon/landuse.webp',
          alt: 'Land use plan',
          caption: 'Landuse plan: commercial periphery, residential megastructure, rooftop green.',
        },
        right: {
          src: '/images/projects/sewoon/masterplan.webp',
          alt: 'Masterplan',
          caption: 'Masterplan — landscape-park connecting metro stations and public programs.',
        }
      },

      // 19. Plan & Section + Plan (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Plan & Section',
        body: 'Differentiated paving guides pedestrian entry into buildings. Commercial programs are positioned at high-visibility outer boundaries, while vertical cores inside the masses link floor levels directly to the rooftop garden.',
        image: {
          src: '/images/projects/sewoon/plan.webp',
          alt: 'Floor plan detail',
          caption: 'Ground floor plan detailing pedestrian transition.',
        }
      },

      // 20. Section Diagram (Full width)
      {
        type: 'image',
        src: '/images/projects/sewoon/section.webp',
        alt: 'Building section',
        size: 'full',
        caption: 'Building section highlighting spatial mixing, cores, and rooftop greenery.',
      },

      // 21. Isometric Perspective (Full width)
      {
        type: 'image',
        src: '/images/projects/sewoon/iso.webp',
        alt: 'Isometric perspective — Sewoon district overview',
        size: 'full',
        caption: 'Isometric view — the Jongmyo-Namsan green axis restored, with Sewoon Sangga as its living core.',
      },
    ],
  },
  {
    id: 4,
    slug: 'professional-work',
    title: 'Professional Work',
    year: '2025',
    program: 'Architecture',
    category: 'Professional Work',
    location: 'Basel, Switzerland',
    thumbnail: null,
    description: '',
    sections: [],
  },
  {
    id: 5,
    slug: 'foreigner-visitation-analysis',
    title: 'Urban Program & Foreigner Visitation Analysis',
    year: '2024',
    program: 'Research / Spatial Analysis',
    category: 'Research',
    location: 'Seoul, Korea',
    thumbnail: '/images/projects/attractiveness-research/slide_8.webp',
    description: 'An empirical study investigating how the spatial distribution of urban programs influences foreign visitor attraction across Seoul districts.',
    sections: [
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_1.webp',
        alt: 'Slide 1',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_2.webp',
        alt: 'Slide 2',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_3.webp',
        alt: 'Slide 3',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_4.webp',
        alt: 'Slide 4',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_5.webp',
        alt: 'Slide 5',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_6.webp',
        alt: 'Slide 6',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_7.webp',
        alt: 'Slide 7',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_8.webp',
        alt: 'Slide 8',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_9.webp',
        alt: 'Slide 9',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_10.webp',
        alt: 'Slide 10',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_11.webp',
        alt: 'Slide 11',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_12.webp',
        alt: 'Slide 12',
        size: 'full',
      },
      {
        type: 'image',
        src: '/images/projects/attractiveness-research/slide_13.webp',
        alt: 'Slide 13',
        size: 'full',
      },
    ],
  },
  {
    id: 6,
    slug: 'cross-connect-ansan',
    title: 'Cross-Connect Ansan',
    year: '2024',
    program: 'Urban Design & Infrastructure / Collective Housing',
    category: 'Architecture',
    location: 'Ansan, Korea',
    thumbnail: '/images/projects/ansan/main_render.webp',
    description:
      'Cross-Connect Ansan proposes the transformation of the undergrounded Ansan Line upper plaza into an urban sanctuary of care, microclimatic housing, and a 4km continuous park loop.',
    sections: [
      // 1. Hero Cover Image (Full width)
      {
        type: 'image',
        src: '/images/projects/ansan/main_render.webp',
        alt: 'Cross-Connect Ansan — main perspective render',
        size: 'full',
      },

      // 2. Introduction
      {
        type: 'text',
        heading: 'Infrastructure Reconstruction: From Disconnection to Connection',
        body: 'The newly introduced Shinansan Line could act as a vital artery connecting the city, but it could also become a massive barrier causing physical separation at the Ansan Culture Plaza. The upper plaza space created by the undergrounding project represents a major opportunity and question for Ansan. Rather than focusing on what to showcase, this project focuses on "how we will live." Cross-Connect Ansan provides a protected urban section where citizens can recover their daily lives in a dense, high-stress metropolitan system.',
      },

      // 3. Panel 1: Masterplan
      {
        type: 'image',
        src: '/images/projects/ansan/panel_1_masterplan.webp',
        alt: 'Site masterplan and design concept',
        size: 'full',
        caption: 'Masterplan showing the upper plaza design and housing mass layouts.',
      },

      // 4. Design Principles 1-3 (Text Left, Image Right)
      {
        type: 'image-left-text-right',
        heading: 'Design Principles for Everyday Recovery',
        body: '1. An Urban Refuge Shaped by Daily Routines\n\nThe plaza is not a vacant civic space for events or exhibitions. We designed it as an "urban refuge" that sustains itself through the daily routines of its residents. Through a complementary structure where residential life flows into the plaza and plaza activities support residency, we aim for a living public space.\n\n2. A Climate-Protected Structure of Movement, Habitation, and Care\n\nThe cross-shaped site is a node where urban flows converge. The proposal designates this intersection as a core point where transit, habitation, and care meet, forming a climate-controlled "protective spatial structure" that reshapes spatial tensions into safe, layered civic spaces.\n\n3. Microclimate Regulation via 8-12 Story Housing Mass\n\nThe 8-to-12-story residential masses surrounding the site act as microclimate-regulating devices. These masses block external noise and pollution, creating a stable, temperate microclimate inside the public space. This allows citizens to use the plaza year-round, even during Korea\'s extreme summer heat waves and winter cold snaps.',
        image: {
          src: '/images/projects/ansan/panel_2_left.webp',
          alt: 'Transit, habitation, and care diagram',
          caption: 'Spatial connection and programmatic cross-sections.',
        }
      },

      // 5. Panel 2 Right Column
      {
        type: 'image',
        src: '/images/projects/ansan/panel_2_right.webp',
        alt: 'Design concept diagrams',
        size: 'medium',
        caption: 'Design Concept Diagrams: Central circle landmark and run/walk track circulation (디자인 컨셉 다이어그램: 센트럴 서클 랜드마크 및 순환 동선)',
      },

      // 6. Integrated Health & Symbolic Infrastructure (Image Left, Text Right)
      {
        type: 'image-left-text-right',
        heading: 'Integrated Health & Symbolic Infrastructure',
        body: '4. 4km Roof-Loop Greenery: Integrated Health Infrastructure\n\nA continuous 4-kilometer loop running along the roof of the residential masses integrates walking, running, and cycling into a single spatial system. The uninterrupted loop supports daily physical activity, functioning as a vibrant public sports environment and an elevated park infrastructure.\n\n5. Floating Public Canopy: Symbolic & Environmental Shelter\n\nLocated at the central intersection, the floating public structure serves as a symbolic marker to observe and orient within the city. Beyond an icon, it functions as an environmental canopy protecting public activities below from weather conditions, allowing citizens to gather and experience the new urban landscape freely.',
        image: {
          src: '/images/projects/ansan/panel_3_top.webp',
          alt: 'Urban structure exploded axonometric',
          caption: 'Urban structure (Exploded Axonometric) showing the mixed-use complex and elevated loop.',
        }
      },

      // 7. Panel 3 Bottom Site Analysis Maps (4 images in a row - Full Width Grid)
      {
        type: 'image-row',
        aspect: 'original',
        images: [
          {
            src: '/images/projects/ansan/panel_3_bottom_1.webp',
            alt: 'Land Use Analysis',
            caption: 'Land Use (용도)',
          },
          {
            src: '/images/projects/ansan/panel_3_bottom_2.webp',
            alt: 'Building Heights Analysis',
            caption: 'Building Heights (층수)',
          },
          {
            src: '/images/projects/ansan/panel_3_bottom_3.webp',
            alt: 'Building Age Analysis',
            caption: 'Building Age (년도)',
          },
          {
            src: '/images/projects/ansan/panel_3_bottom_4.webp',
            alt: 'Transit Network Analysis',
            caption: 'Transit Network (철도 현황)',
          },
        ]
      },

      // 9. Manifesto for Life (Text Left, Image Right)
      {
        type: 'text-left-image-right',
        heading: 'A Manifesto for Sustainable Life',
        body: 'Housing is not the ultimate commercial goal of this development, but the very condition that sustains the Sanctuary. It provides residential stability for youth and newlyweds, forms a community foundation for the elderly, and ensures a safe, protected environment for children.\n\nCross-Connect Ansan redefines the civic plaza. Rather than focusing on flamboyant architectural rhetoric, it centers on how healthily and safely citizens can live their daily lives. Through this infrastructural transformation, Ansan will transcend being a peripheral city, modeling a future city that prioritizes everyday recovery.',
        image: {
          src: '/images/projects/ansan/panel_4_top_left.webp',
          alt: 'Central plaza rendering and canopy view',
          caption: 'Central plaza view featuring the floating environmental canopy.',
        }
      },

      // 10. Panel 4 Top Right Section
      {
        type: 'image',
        src: '/images/projects/ansan/panel_4_top_right.webp',
        alt: 'Elevated walkway detail section',
        size: 'medium',
        caption: 'Detailed structural section of the residential mass and roof loop.',
      },

      // 11. Panel 4 Bottom Renders (Alternating Image & Text Layouts)
      {
        type: 'image-left-text-right',
        heading: 'Interior Courtyard & Microclimate Garden',
        body: 'The interior courtyard is designed to foster intergenerational connection, linking the youth daycare and senior centers with a lush microclimate garden (주거지 - Daycare, 시니어센터).\n\nThis controlled, temperate environment provides a safe, quiet buffer from the surrounding urban streets, allowing residents of all ages to interact daily in a natural landscape.',
        image: {
          src: '/images/projects/ansan/panel_4_bottom_1.webp',
          alt: 'Interior courtyard and microclimate garden render',
          caption: 'Interior Courtyard & Microclimate Garden.',
        }
      },
      {
        type: 'text-left-image-right',
        heading: 'Central Plaza & Environmental Canopy',
        body: 'A vibrant public square situated beneath the floating environmental canopy (상업지 - 안산 컴플렉스, 센트럴 광장).\n\nThis space serves as the cultural and commercial heart of the project, sheltering civic gatherings, markets, and social activities from harsh weather while maintaining a continuous view of Ansan\'s new urban landscape.',
        image: {
          src: '/images/projects/ansan/panel_4_bottom_2.webp',
          alt: 'Public space underneath the environmental canopy render',
          caption: 'Public Space Underneath the Environmental Canopy.',
        }
      },
      {
        type: 'image-left-text-right',
        heading: 'Pedestrian Flow & Entrance Plaza',
        body: 'The pedestrian entrance plaza establishes a fluid connection between the rear residential complexes and the upper park loop (배후 주거단지 및 옥상정원).\n\nDedicated walkways and landscaped ramps prioritize foot traffic, guiding residents smoothly from their homes to the active recreation loops.',
        image: {
          src: '/images/projects/ansan/panel_4_bottom_3.webp',
          alt: 'Pedestrian flow and entrance plaza connection render',
          caption: 'Pedestrian Flow & Entrance Plaza Connection.',
        }
      },
    ],
  },
];

export default projects;
