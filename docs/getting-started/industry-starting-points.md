# Industry Starting Points

Loupe Factory includes industry-specific starter defaults so your team does not
have to build every catalog and workflow from scratch. Your chosen industry in
[Organization Settings](admin-settings-quick-map.md#organization-settings)
shapes the starting vocabulary, catalog structure, and production flow you will
see on day one.

The tables below keep the exact starter names used in Loupe Factory, then
explain them in plain language so teams in any region can understand them
quickly.

## Gemstones

Loupe Factory starts gemstone businesses with a catalog built around loose
stones, lapidary work, and the support supplies used to cut, polish, grade, and
ship them. Default product names include stones such as African Amethyst,
Aquamarine, Diamond, Emerald, Ruby, Sapphire, and workshop supply families for
stone prep, polishing, testing, and packing.

### Default inventory flow

``` mermaid
flowchart LR
    MS["Materials & Supplies"] --> R["Rough"] --> P["Preform"] --> C["Cut"] --> CAL["Caliberated"] --> POL["Polished"] --> GP["Girdle Polished"] --> F["Finished"]
```

This default route shows the main inventory states most gemstone teams use from
incoming rough stock to sale-ready stones.

### Finished inventory types

| Finished inventory type | User-friendly definition |
| --- | --- |
| Faceted | Stones cut with multiple flat faces to increase sparkle and light return. |
| Cabochons | Smooth, domed stones with a flat back, often used when color or optical effect matters more than sparkle. |
| Beads | Drilled stones prepared for stringing, strand work, or component assembly. |

### Materials & Supplies categories

| Materials & Supplies category | User-friendly definition |
| --- | --- |
| Stone Mounting & Prep | Dop wax, holders, and prep tools used to secure stones before shaping and cutting. |
| Cutting & Polishing | Laps, saw blades, diamond grit, burs, coolants, and tumbling media used to shape and polish stones. |
| Cleaning & Maintenance | Cleaning fluids and maintenance supplies used to remove wax, oils, dust, and workshop residue. |
| Gemstone Treatments | Resins, oils, heat-treatment supplies, dyes, and coatings used when a treatment step is part of production and must be disclosed. |
| Measuring & Testing | Calipers, scales, sieves, grading lights, and gem testing tools used to verify size, weight, color, and identity. |
| Safety & Protection | PPE, waste-handling supplies, and protective equipment used to keep workshop work safe. |
| Packaging & Shipping | Parcels, jars, labels, moisture-control items, and shipping supplies used to store and dispatch finished stones. |

### Production stages

| Production stage | User-friendly definition |
| --- | --- |
| Rough Assorting | Sort rough gemstones by size, color, clarity, and cutting potential before work starts. |
| Rough Cutting (Saw/Cleave) | Saw or cleave rough stones in the best direction to reduce waste and improve yield. |
| Preform | Create the first workable outline before precise cutting begins. |
| Dopping | Mount each stone on a dop stick so it can be held securely during cutting. |
| Coarse Cut | Remove extra material and establish the main geometry. |
| Calibrate to Size (MM) | Bring stones to exact millimeter sizes for matched sets and standard jewelry settings. |
| Faceting & Girdle (or Dome Shaping) | Cut facets and girdles for faceted stones, or shape domes and edges for cabochons. |
| Pre-Polish | Remove small scratches and prepare the surface for final polish. |
| Final Polish | Apply the final polish needed for the target luster and finish quality. |
| QA & Testing | Check dimensions, weight, symmetry, color consistency, and treatment disclosure before release. |
| Finish & Pack | Clean, label, and pack stones for storage, transfer, or shipment. |

### Size and shape defaults

#### Size groups

| Size group | User-friendly definition | Example defaults |
| --- | --- | --- |
| Round sizes (diameter) | Standard round size ladder for calibrated loose stones and bead-style work. | `0.8 mm`, `0.9 mm`, `1.0 mm` ... `18.0 mm`, `20.0 mm`, `Mixed sizes` |
| Oval sizes (length x width) | Common oval size pairs used for calibrated loose stones. | `3x2 mm`, `4x3 mm`, `5x3 mm` ... `20x15 mm`, `25x18 mm`, `Mixed sizes` |
| Square/Princess sizes | Square size presets used for square and princess-style cutting. | `2x2 mm`, `2.5x2.5 mm`, `3x3 mm` ... `10x10 mm`, `12x12 mm`, `Mixed sizes` |
| Emerald cut (length x width) | Rectangle-based size presets for emerald-cut stones. | `4x2 mm`, `5x3 mm`, `6x4 mm` ... `16x12 mm`, `20x10 mm`, `Mixed sizes` |
| Pear/Teardrop (length x width) | Tapered size pairs used for pear and drop-style stones. | `3x2 mm`, `4x3 mm`, `5x3 mm` ... `16x12 mm`, `6x8 to 9x13 mm`, `Mixed sizes` |
| Marquise (length x width) | Long, pointed size pairs for marquise stones. | `6x3 mm`, `7x3.5 mm`, `8x4 mm` ... `18x9 mm`, `20x10 mm`, `Mixed sizes` |
| Kite (length x width) | Geometric size pairs for kite cuts and directional layouts. | `6x3 mm`, `7x3.5 mm`, `8x4 mm` ... `18x9 mm`, `20x10 mm`, `Mixed sizes` |
| Shield (length x width) | Geometric size pairs for shield cuts and side-stone layouts. | `6x3 mm`, `7x3.5 mm`, `8x4 mm` ... `18x9 mm`, `20x10 mm`, `Mixed sizes` |
| Heart (length x width) | Heart-shaped size pairs for romantic and novelty cuts. | `4x4 mm`, `5x5 mm`, `6x6 mm` ... `12x12 mm`, `15x15 mm`, `Mixed sizes` |
| Trillion (equilateral triangle) | Triangle presets used for trilliant or triangle stones. | `4 mm triangle`, `5 mm triangle`, `6 mm triangle` ... `12 mm triangle`, `15 mm triangle`, `Mixed sizes` |
| Baguette (length x width) | Narrow rectangle sizes used for baguette cuts. | `3x2 mm`, `4x2 mm`, `5x3 mm` ... `10x5 mm`, `12x6 mm`, `Mixed sizes` |
| Cushion (length x width) | Square-to-rectangular cushion presets used for softer-edged cuts. | `5x5 mm`, `6x6 mm`, `7x7 mm` ... `11x10 mm`, `12x10 mm`, `Mixed sizes` |
| Cabochon sizes (diameter for round, length x width for oval) | Dome-style presets for round and oval cabochons. | `6 mm cab`, `7 mm cab`, `8 mm cab` ... `18x13 mm cab`, `20x10 mm cab`, `Mixed sizes` |
| Specialty/unusual sizes | Extended presets for tiny precision stones and larger statement pieces. | `0.8 mm`, `1.0 mm`, `1.25 mm` ... `350x250 mm`, `400x300 mm`, `500x400 mm` |
| Mix | Broad mixed preset list used when jobs need many shapes, sizes, or weight bands. | `0.8 mm`, `1.0 mm`, `1.25 mm` ... `5 to 10 g each pc`, `10+ g each pc`, `Mixed sizes` |

#### Shape defaults

| Shape default | User-friendly definition | Linked size groups |
| --- | --- | --- |
| Round | Standard round stones and round bead-style layouts. | `Round sizes (diameter)` |
| Oval | Elongated oval stones. | `Oval sizes (length x width)` |
| Square | Square and princess-style outlines. | `Square/Princess sizes` |
| Emerald Cut | Step-cut rectangular outlines. | `Emerald cut (length x width)` |
| Pear, Drops | Tapered drop-style outlines for loose stones and matching pairs. | `Pear/Teardrop (length x width)` |
| Marquise | Long pointed outlines with narrow ends. | `Marquise (length x width)` |
| Heart | Symmetrical heart outlines. | `Heart (length x width)` |
| Shield | Shield-style geometric side stones and center stones. | `Shield (length x width)` |
| Kite | Kite-style geometric stones. | `Kite (length x width)` |
| Trilliant, Triangle | Triangular stone layouts for accents or center stones. | `Trillion (equilateral triangle)` |
| Baguette | Narrow rectangular stones for accents and calibrated sets. | `Baguette (length x width)` |
| Cushion | Softer square-to-rectangular outlines with rounded corners. | `Cushion (length x width)` |
| High Dome, Flat | Cabochon profile options for domed or flatter finishes. | `Cabochon sizes (diameter for round, length x width for oval)` |
| Balls | Spherical bead or ball-style stock. | `Round sizes (diameter)` |
| Hexagon, Octagon | Specialty geometric cuts used when standard shapes are not the goal. | `Specialty/unusual sizes` |
| Mix | Mixed-shape jobs that need the full preset coverage. | `Mix` |

### Typical starter teams

| Typical starter team | What this team owns | Example roles |
| --- | --- | --- |
| Rough Assorting | Sorts incoming rough by size, color, clarity, and cutting potential before routing work. | `Operator`, `Assorter`, `Assorting Supervisor` |
| Preforming | Creates the first workable outline before precise cutting. | `Operator`, `Senior Operator`, `Preforming Supervisor` |
| Dopping | Mounts stones securely for stable handling and angle control. | `Technician`, `Dopping Supervisor` |
| Cutting | Handles rough cutting and coarse shaping. | `Operator`, `Cutter`, `Cutting Supervisor` |
| Calibration | Brings stones to target millimeter sizes for matched lots and standard settings. | `Operator`, `Calibrator`, `Calibration Supervisor` |
| Faceting & Girdling | Builds final geometry for faceted stones before polish. | `Faceter`, `Senior Faceter`, `Polishing Supervisor` |
| Polish | Performs pre-polish and final polish work. | `Polisher`, `Master Polisher`, `Polishing Supervisor` |
| QA | Verifies size, symmetry, finish, weight, and disclosure details before release. | `Inspector`, `QA Lead`, `QA Supervisor` |
| Finishing & Packing | Cleans, labels, packs, and stages stones for storage or shipment. | `Packing Associate`, `Packing Lead`, `Packing Supervisor` |
| Planning and production administration support | Coordinates schedules, priorities, and shop handoffs across the core production teams. | `Planner`, `Production Manager`, `Production Supervisor` |

Customize this setup from [Products
Settings](admin-settings-quick-map.md#products-settings), [Inventory
Settings](admin-settings-quick-map.md#inventory-settings), and [Production
Settings](admin-settings-quick-map.md#production-settings).

## Jewelry

Loupe Factory starts jewelry businesses with defaults for mounts, findings,
components, finished jewelry, and the workshop supplies needed to move from
design approval through casting, setting, finishing, and dispatch. Default
product names include ring mounts, pendant mounts, bezel cups, claws and heads,
clasps, jump rings, earring posts, chains, charms, bracelets, necklaces, and
related workshop categories.

### Default inventory flow

``` mermaid
flowchart TB
    MS["Materials & Supplies"] --> DA["Design Approved"] --> CAD["CAD/STL Ready"] --> MODEL["3D Printed/Wax Model"]
    MODEL --> MOLD["Silicone/Rubber Molds"] --> WAX["Wax Injected"]
    WAX --> STONEWAX["Stone-Set Wax Model"]
    WAX --> TREE["Wax Trees"]
    STONEWAX --> TREE
    TREE --> CASTTREE["Cast Trees (As-Cast)"] --> RAW["Raw Casted/De-sprued"] --> PREFIN["Pre-Finished (File/Emery)"]
    MS --> FAB["Fabricated Parts (no casting)"]
    PREFIN --> ASM["Assembled (Soldered)"]
    FAB --> ASM
    ASM --> PREPOL["Pre-Polished/Mass Finished"] --> READY["Ready for Setting"] --> STONESET["Stone Set"] --> FINAL["Final Polished"] --> PLATE["Plated/Coated"] --> HALL["Hallmarked/Stamped"] --> REVIEW{"QC review"}
    REVIEW -->|Pass| QC["QC Passed"] --> FIN["Finished"]
    REVIEW -->|Rework| REWORK["Need Rework/Repair"]
```

Casting and fabrication routes both feed the same finished-jewelry path, which
helps teams run one-off custom work and repeat production in the same system.

### Finished inventory types

| Finished inventory type | User-friendly definition |
| --- | --- |
| Rings | Finger-worn styles such as engagement, wedding, eternity, statement, and stackable rings. |
| Earrings | Paired ear styles such as studs, hoops, drops, jackets, cuffs, and huggies. |
| Necklaces | Finished neckwear such as chains, chokers, station styles, and pendant-on-chain products. |
| Pendants | Hanging pieces sold without the chain, such as solitaire, symbol, or charm pendants. |
| Bracelets | Flexible wristwear such as chain, tennis, charm, or ID bracelets. |
| Bangles & Cuffs | Rigid wristwear such as solid bangles, hinged styles, and open cuffs. |
| Anklets | Lightweight ankle chains and adjustable ankle jewelry. |
| Brooches & Lapel Pins | Decorative pins for garments, uniforms, or styling use. |
| Charms & Beads | Small add-on pieces used for bracelet and necklace customization. |
| Cufflinks & Tie Bars | Formal accessories used with shirts and ties. |
| Hair Jewelry | Tiaras, pins, combs, headbands, and similar hair accessories. |
| Body Jewelry | Piercing products such as nose, navel, cartilage, and helix pieces. |
| Jewelry Sets | Coordinated multi-piece sets sold together. |
| Watches & Watch Bands | Timepieces and replacement bands if your business carries them. |

### Materials & Supplies categories

| Materials & Supplies category | User-friendly definition |
| --- | --- |
| Precious Metals | Gold, silver, platinum, and related metal forms such as grain, sheet, wire, tubing, solder, chain, blanks, and findings. |
| Gemstones | Loose stones used for finished jewelry, settings, matching pairs, or cast-in-place work. |
| Casting & Mold Making | Casting alloys, investment, crucibles, mold supplies, waxes, and 3D printing resins used to create production models and cast parts. |
| Cleaning & Surface Chemicals | Pickle, flux, polishing compounds, abrasives, patinas, and other chemicals used to clean and finish metal surfaces. |
| Plating & Coating | Rhodium and plating solutions, salts, masking materials, and pen-plating tools used to apply final surface coatings. |
| Stone Setting & Assembly | Setting aids, burs, gravers, adhesives, and assembly components used during stone setting and bench assembly. |
| Workshop Machinery & Equipment | Casting, cleaning, waxing, polishing, and general bench machines used to run the workshop. |
| Workshop Supplies & Safety | Gas, PPE, and daily workshop supplies that keep production moving safely. |
| Packaging & Shipping | Boxes, anti-tarnish items, tags, care cards, and shipping materials used to present and dispatch finished jewelry. |

### Production stages

| Production stage | User-friendly definition |
| --- | --- |
| Design Sign-off & BOM | Finalize the approved design, materials, and bill of materials before production starts. |
| CAD & Tooling Prep | Prepare production-ready CAD files and required tools. |
| Model (3D Print/Wax) | Create the master model by 3D printing or wax work. |
| Mold Making (Optional) | Build silicone or rubber molds for repeat production runs. |
| Wax Injection (Optional) | Inject wax patterns from molds and check them before tree assembly. |
| Cast-in-Place Stone Setting | Set approved small stones into wax models before casting when that route is used. |
| Sprue & Tree (Casting Route) | Attach wax parts to sprues and trees so metal can flow correctly during casting. |
| Invest & Burnout | Build the investment mold and burn out the wax to create clean cavities. |
| Metal Casting | Cast the selected alloy into the prepared mold. |
| Devest & Cut | Remove investment material, cut pieces from the tree, and sort them for finishing. |
| Pre-finish (File/Emery) | Remove gates and seams, then smooth surfaces before assembly. |
| Fabrication (No Casting Route) | Make components directly from sheet, wire, or tubing when casting is not used. |
| Assembly & Solder | Join components such as shanks, settings, hinges, and clasps into complete pieces. |
| Pre-Polish/Mass Finish | Apply first-stage polishing before stone setting. |
| Stone Setting | Cut seats, set stones, tighten them, and confirm security. |
| Final Polish | Apply the final high-shine polish while protecting stones and details. |
| Plating/Coating | Apply plating or protective coating and record the finish details. |
| Hallmarking/Stamping | Add purity and brand marks for compliance and traceability. |
| QA & Function Test | Check dimensions, finish quality, stone security, and moving-part function. |
| Clean, Label & Pack | Clean the piece, attach final labels, and pack it for storage or shipment. |

### Size and shape defaults

#### Size groups

| Size group | User-friendly definition | Example defaults |
| --- | --- | --- |
| Center stone (round) | Standard round center-stone sizes used in rings, earrings, pendants, and bracelets. | `0.8 mm`, `0.9 mm`, `1.0 mm` ... `11.0 mm`, `12.0 mm`, `Mixed sizes` |
| Center stone (fancy LxW) | Non-round center-stone sizes such as oval, pear, emerald, marquise, and similar shapes. | `3x2 mm`, `4x3 mm`, `5x3 mm` ... `18x9 mm`, `20x10 mm`, `Mixed sizes` |
| Melee (round), Tennis stone, Channel stone (round), Channel stone (princess), Channel stone (baguette LxW) | Small-stone presets used for melee work, tennis layouts, and channel setting. | `0.8 mm`, `1.0 mm`, `1.1 mm` ... `10x8 mm`, `14x8 mm`, `Mixed sizes` |
| Halo outer diameter, Prong count, Head seat height | Setting-control presets used to build head geometry, halo proportions, and stone support. | `6 mm`, `7 mm`, `8 mm` ... `5.0 mm`, `6.0 mm`, `Mixed sizes` |
| Steel bur (cross-cut cone) head diameter, Steel bur (cross-cut cone) working length, Steel bur shank diameter | Bench-tool size presets used during seat cutting, pre-finishing, and stone-setting prep. | `0.8 mm`, `1.0 mm`, `1.2 mm` ... `3.0 mm`, `3.175 mm (1/8 in)`, `Mixed sizes` |
| Bezel cup (round), Bezel cup (fancy LxW) | Common bezel-cup presets for round and fancy stones. | `2.0 mm`, `2.5 mm`, `3.0 mm` ... `16x10 mm`, `20x10 mm`, `Mixed sizes` |
| Bezel wire (width), Bezel wire (thickness), Gallery wire (height), Gallery wire (thickness) | Structural presets for bezel walls and decorative gallery work. | `0.2 mm`, `0.3 mm`, `0.4 mm` ... `8 mm`, `10 mm`, `Mixed sizes` |
| Shank width, Shank thickness, Ring size (US) | Ring-body presets used to control fit, balance, and finger size. | `1.2 mm`, `1.4 mm`, `1.6 mm` ... `9.5 US`, `10 US`, `Mixed sizes` |
| Post length, Post gauge (AWG), Back diameter, Leverback pad | Earring-fit presets used for posts, backs, and leverback constructions. | `9 mm`, `10 mm`, `11 mm` ... `5 mm`, `6 mm`, `Mixed sizes` |
| Hoop OD, Hoop/Huggie tube, Huggie ID, Jacket inner seat, Jacket outer diameter | Hoop, huggie, and jacket presets used for size, comfort, and visual proportion. | `8 mm`, `9 mm`, `10 mm` ... `40 mm`, `50 mm`, `Mixed sizes` |
| Jump ring ID, Jump ring wire gauge (AWG), Split ring OD | Findings presets used to connect parts and finish assemblies. | `2.0 mm`, `3.0 mm`, `4.0 mm` ... `9 mm`, `10 mm`, `Mixed sizes` |
| Bail inside height, Bail inside width, Clasp length | Pendant and clasp presets used to match chains, movement, and closure size. | `2 mm`, `3 mm`, `4 mm` ... `13 mm`, `15 mm`, `Mixed sizes` |
| Head/Eye pin length, Head/Eye pin gauge (AWG), Crimp (Tube), End cap inner ID, Bead tip size | Assembly presets used for stringing, dangles, and finishing components. | `1x2 mm`, `2x2 mm`, `2x3 mm` ... `50 mm`, `60 mm`, `Mixed sizes` |
| Chain width, Finished chain length, Extender length | Chain presets used for finished necklace and bracelet lengths. | `0.8 mm`, `1.0 mm`, `1.3 mm` ... `22 in`, `24 in`, `Mixed sizes` |
| Bangle inner diameter, Cuff length end-to-end, Cuff gap | Wristwear presets used for bangles and cuffs. | `25 mm`, `30 mm`, `35 mm` ... `64 mm (2.50 in)`, `67 mm (2.62 in)`, `Mixed sizes` |
| ID plate (LxH), Tag/Disc | Personalization and charm-tag presets. | `30x5 mm`, `30x6 mm`, `35x6 mm` ... `15 mm`, `20 mm`, `Mixed sizes` |
| Mix | Broad mixed preset list used when a job needs many measurements in one SKU family. | `0.2 mm`, `0.3 mm`, `0.4 mm` ... `50 in`, `60 in`, `Mixed sizes` |

#### Shape defaults

| Shape default names | User-friendly definition | Linked size groups |
| --- | --- | --- |
| Round, Oval, Princess, Emerald, Pear, Drops, Marquise, Heart, Cushion, Trillion, Baguette, Asscher, Radiant, Hexagon, Kite, Shield, Octagon, Flower/Cluster, Emerald/Baguette | Core stone-shape presets used for center stones, side stones, halo layouts, and bezel builds. | `Center stone (round)`, `Center stone (fancy LxW)`, `Bezel cup (round)`, `Bezel cup (fancy LxW)`, `Melee (round)`, `Halo outer diameter`, `Channel stone (round)`, `Channel stone (princess)`, `Channel stone (baguette LxW)` |
| Round Halo, Starburst, Sunburst, Flower | Halo and jacket motifs used around earrings and pendants. | `Jacket inner seat`, `Jacket outer diameter`, `Melee (round)` |
| Flat, Tall/Heavy Wall, Scalloped, Serrated, Coin Edge, Stepped | Bezel-edge profile presets that control the wall style around stones. | `Bezel wire (width)`, `Bezel wire (thickness)` |
| Cross-Cut (Cone Bur) | Rotary-tool profile used during seat cutting and controlled metal removal. | `Steel bur (cross-cut cone) head diameter`, `Steel bur (cross-cut cone) working length`, `Steel bur shank diameter` |
| Scallop, Crown, Chevron, Beaded, Milgrain, Sunburst | Gallery-wire motif presets used under or around stones. | `Gallery wire (height)`, `Gallery wire (thickness)` |
| Open Pad, Closed Pad, Cup + Peg, Simple Hook, Decorative Hook, Square-Edge Tube | Earring-construction presets for drops, leverbacks, hooks, hoops, and huggies. | `Leverback pad`, `Post gauge (AWG)`, `Hoop/Huggie tube` |
| Butterfly/Friction, Comfort/Disc, Screw-Back, Straight Peg | Post and back presets that control comfort and locking style. | `Back diameter`, `Post length`, `Post gauge (AWG)` |
| Lobster, Spring Ring, Toggle, Magnetic, Box, Hook-Eye, Teardrop, Oval/Housing, Bar-and-Ring | Clasp presets used for finished closures. | `Clasp length` |
| V-Bail, Rabbit-Ear, Tube, Hidden, Ice-Pick, Fancy | Bail presets used to connect pendants to chains. | `Bail inside height`, `Bail inside width`, `Crimp (Tube)` |
| Straight Bar, Ball Head, Flat Head, Loop Head, Tube Hinge, Butt Hinge, Bead, Plain Cap, Cord End, Fold-Over, Clamshell | Small-component presets used in dangles, stringing, hinge work, and end findings. | `Head/Eye pin length`, `Head/Eye pin gauge (AWG)`, `Crimp (Tube)`, `End cap inner ID`, `Bead tip size`, `Gallery wire (thickness)` |
| Cable, Curb, Rope, Box, Figaro, Paperclip, Bead/Ball | Chain and link-geometry presets used for finished chains and extenders. | `Chain width`, `Finished chain length`, `Extender length` |
| Disc, Tag, Bar/Rectangle, Curved Plate, Oval, Hexagon, Heart | Charm, tag, and plate presets used for personalization and branding. | `ID plate (LxH)`, `Tag/Disc` |
| Half-Round, Comfort-Fit, Flat, Knife-Edge, Euro-Shank | Ring-shank profile presets used for comfort and side profile. | `Shank width`, `Shank thickness`, `Ring size (US)` |
| Mix | Broad fallback preset for mixed-shape or mixed-component jobs. | `Mix` |

### Typical starter teams

| Typical starter team | What this team owns | Example roles |
| --- | --- | --- |
| Design & BOM | Finalizes the approved design, key materials, and build plan before production starts. | `Designer`, `Design Lead` |
| CAD/CAM | Prepares production-ready CAD files and tooling-ready geometry. | `CAD Designer`, `CAD Lead` |
| Mold Making | Builds reusable molds for repeat production. | `Mold Technician`, `Mold Supervisor` |
| Wax Room | Creates and checks wax patterns before treeing and casting. | `Wax Technician`, `Wax Supervisor` |
| Casting | Runs the casting route from investment through metal pour. | `Caster`, `Casting Supervisor` |
| Assembly & Solder | Joins fabricated or cast parts into complete pieces. | `Soldering Technician`, `Soldering Supervisor` |
| Stone Setting | Prepares seats, sets stones, and confirms security. | `Stone Setter`, `Master Setter`, `Stone Setting Supervisor` |
| Final Polish | Applies the final finish before plating, stamping, or final QA. | `Polisher`, `Polishing Supervisor` |
| QA | Checks finish, function, stone security, and product readiness. | `Inspector`, `QA Lead` |
| Packing | Cleans, labels, and packs finished pieces for stock or shipment. | `Packing Associate`, `Packing Lead`, `Packing Supervisor` |
| Planning, sourcing, branding, and administration support | Keeps production supplied, scheduled, branded, and operational across all core teams. | `Planner`, `Buyer`, `Brand Manager`, `Production Manager` |

Customize this setup from [Products
Settings](admin-settings-quick-map.md#products-settings), [Inventory
Settings](admin-settings-quick-map.md#inventory-settings), and [Production
Settings](admin-settings-quick-map.md#production-settings).

## Auto Parts

Loupe Factory starts auto-parts businesses with defaults built for industrial
manufacturing, supplier coordination, traceability, and export-ready dispatch.
Default product names cover braking, ABS, wheel-end, axle, suspension,
air-suspension, driveline, engine, filtration, electrical, body, hardware, and
repair-kit categories.

### Default inventory flow

``` mermaid
flowchart TB
    MS["Materials & Supplies"] --> RAW["Raw Material"]
    MS --> BO["Bought-out Component"]
    RAW --> BLANK["Cast/Forged Blank"]
    RAW --> STAMP["Stamped/Pressed Blank"]
    BLANK --> MACH["Machined Component"]
    STAMP --> MACH
    BO --> MACH
    MACH --> HEAT["Heat Treated Component"]
    MACH --> WELD["Welded/Fabricated Component"]
    HEAT --> SURF["Surface Finished Component"]
    HEAT --> WELD
    SURF --> SUB["Sub-Assembly"]
    BO --> SUB
    WELD --> SUB
    SUB --> TEST["Tested & Approved"] --> QA{"Final QA Release"}
    QA -->|Pass| FIN["Finished"]
    QA -->|Sort or rework| REWORK["Need Rework / Sort"]
```

Bought-out components can join the route at machining or sub-assembly, which
matches the way many mixed manufacturing and assembly shops operate.

### Finished inventory types

| Finished inventory type | User-friendly definition |
| --- | --- |
| Braking Parts | Brake pads, discs, drums, caliper hardware, and related braking components. |
| ABS & Brake Electronics | ABS sensors, tone rings, modulators, and related brake-control electronics. |
| Steering & Suspension Parts | Control arms, ball joints, tie rods, stabilizer links, shocks, and related ride-control parts. |
| Air Suspension Parts | Air springs, bellows, and related air-suspension service parts. |
| Trailer Suspension Hardware | Hangers, equalizers, shackles, pins, and related trailer suspension hardware. |
| Suspension Bushes & Mountings | Rubber, bronze, polyurethane, and bonded bush components used at chassis mounting points. |
| U-Bolts & Clamping Hardware | U-bolts, clamp plates, nuts, and related axle or suspension clamping parts. |
| Wheel End & Hub Parts | Wheel hubs, hub-bearing kits, wheel studs, and related wheel-end assemblies. |
| Wheel & Rim Parts | Wheel rims and related wheel-support service parts. |
| Axle & Running Gear Parts | Axle beams, shafts, spindles, and related running-gear parts. |
| Driveline & Transmission Parts | CV joint kits, drive shafts, clutch parts, and transmission-side mechanical parts. |
| Engine Components | Pumps, gaskets, seals, mounts, and other engine-related replacement parts. |
| Cooling System Parts | Radiators, water pumps, intercoolers, hoses, and thermal-management parts. |
| Filtration Parts | Air, oil, fuel, and cabin filters. |
| Electrical Parts | Starter motors, alternators, ignition coils, sensors, and switches. |
| Rubber-to-Metal Parts | Bonded parts such as engine mounts and vibration-control components. |
| Fasteners & Hardware | Automotive fasteners, clips, studs, and installation hardware. |
| Body & Lighting Parts | Lamp assemblies, mirrors, brackets, and related body-mounted service parts. |
| Service & Repair Kits | Bundled repair or maintenance kits sold as complete sets. |

### Materials & Supplies categories

| Materials & Supplies category | User-friendly definition |
| --- | --- |
| Steel & Alloys | Bars, tubes, strip, feedstock, and formed steel materials used for load-bearing auto parts. |
| Rubber & Elastomers | Rubber compounds, seals, profiles, adhesives, and bellows used for sealing, damping, and air systems. |
| Plastics & Polymers | Engineering plastics, inserts, clips, bushes, and polymer sleeves used in component builds. |
| Bearings & Rolling Elements | Balls, rollers, rings, cages, bushes, and related motion-control components. |
| Electrical & Electronics | Wire, connectors, sensors, switches, PCB modules, lamp parts, and harness components. |
| Machining & Tooling | Cutting tools, inserts, drills, jigs, fixtures, gauges, dies, and tooling spares. |
| Surface Treatment Chemicals | Cleaning, phosphating, plating, coating, passivation, paint, and marking consumables. |
| Lubricants & Process Fluids | Coolants, cutting oils, hydraulic fluids, grease, and rust-preventive fluids. |
| Packaging & Shipping | Boxes, trays, labels, documents, pallets, and export-packing supplies. |
| Shop Consumables & Safety | PPE, welding consumables, housekeeping items, and general workshop supplies. |

### Production stages

| Production stage | User-friendly definition |
| --- | --- |
| Incoming Material Inspection | Receive raw materials and bought-out parts, then verify grade, dimensions, certificates, and lot traceability. |
| Blank / Primary Forming | Create the first controlled blank through casting, forging, cutting, or stamping. |
| CNC Machining | Machine bores, faces, threads, grooves, and mounting surfaces to drawing tolerances. |
| Heat Treatment | Apply hardening, tempering, induction, or stress-relief processes to reach required mechanical properties. |
| Welding & Fabrication | Join or build parts through welding, bending, riveting, or related fabrication steps. |
| Surface Treatment & Coating | Apply phosphating, plating, painting, powder coating, or passivation for protection and finish quality. |
| Sub-Assembly | Combine manufactured parts with bought-out parts into a functional module. |
| Testing & Validation | Verify dimensions, fitment, torque, leak-tightness, hardness, or functional performance. |
| Final QA Release | Perform final release checks, confirm documentation, and separate any units that need rework or sorting. |
| Pack, Label & Dispatch | Pack finished parts with labels, export markings, and shipping documentation. |

### Size and shape defaults

#### Size groups

| Size group | User-friendly definition | Example defaults |
| --- | --- | --- |
| Outer diameter (OD) | Outer diameter presets used for discs, hubs, rings, tubes, and rotating parts. | `10 mm`, `12 mm`, `14 mm` ... `180 mm`, `200 mm`, `Mixed sizes` |
| Inner diameter (ID) | Inner diameter presets used for bushes, rings, sleeves, and tubular parts. | `6 mm`, `8 mm`, `10 mm` ... `100 mm`, `120 mm`, `Mixed sizes` |
| Length | Linear length presets used for shafts, tubes, rods, and other straight parts. | `1 in`, `1.5 in`, `2 in` ... `10 ft`, `12 ft`, `Mixed sizes` |
| Width x Height | Two-axis presets used for brackets, plates, and rectangular sections. | `20x10 mm`, `25x15 mm`, `30x20 mm` ... `12x6 ft`, `15x8 ft`, `Mixed sizes` |
| Thickness | Thickness presets used for plate, brackets, discs, and formed stock. | `0.5 mm`, `1.0 mm`, `1.2 mm` ... `20.0 mm`, `25.0 mm`, `Mixed sizes` |
| Thread size | Standard metric and pipe-thread presets used for threaded parts and fittings. | `M4 x 0.7`, `M5 x 0.8`, `M6 x 1.0` ... `3/8 NPT`, `1/2 NPT`, `Mixed sizes` |
| Bolt circle / PCD | Bolt-circle presets used for hubs, flanges, and wheel-end parts. | `63 mm`, `70 mm`, `80 mm` ... `139.7 mm`, `150 mm`, `Mixed sizes` |
| Tube / Hose ID | Internal-flow presets used for hoses, bellows, and fluid-transfer parts. | `4 mm`, `6 mm`, `8 mm` ... `45 mm`, `50 mm`, `Mixed sizes` |
| Tube / Shaft OD | Outer size presets used for shafts, sleeves, and tubular parts. | `6 mm`, `8 mm`, `10 mm` ... `50 mm`, `60 mm`, `Mixed sizes` |
| Disc / Rotor diameter | Rotor and disc diameter presets used for braking and wheel-end products. | `180 mm`, `200 mm`, `220 mm` ... `360 mm`, `400 mm`, `Mixed sizes` |
| Tooth / Spline count | Tooth-count presets used for splined or geared interfaces. | `12T`, `16T`, `18T` ... `36T`, `40T`, `Mixed sizes` |
| Kit / Set quantity | Pack-size presets used for bundled service kits and hardware sets. | `1 pc`, `2 pcs`, `4 pcs` ... `50 pcs`, `100 pcs`, `Assorted` |
| Mix | Broad mixed preset list used when a family needs many measurements in one SKU structure. | `6 mm`, `8 mm`, `10 mm` ... `8 pcs`, `Assorted`, `Mixed sizes` |

#### Shape defaults

| Shape default | User-friendly definition | Linked size groups |
| --- | --- | --- |
| Round / Disc | Round part profile used for discs, rotors, and circular flanges. | `Outer diameter (OD)`, `Thickness`, `Disc / Rotor diameter`, `Bolt circle / PCD` |
| Cylindrical | Turned or tube-like profile used for shafts, sleeves, and hubs. | `Outer diameter (OD)`, `Inner diameter (ID)`, `Length`, `Tube / Shaft OD` |
| Ring | Ring-style profile used for bushes, seals, and bearing-related parts. | `Outer diameter (OD)`, `Inner diameter (ID)`, `Thickness` |
| Tubular | Hollow tube profile used for pipes, sleeves, and structural tubes. | `Tube / Shaft OD`, `Tube / Hose ID`, `Length` |
| Rectangular | Flat rectangular section used for plates and formed brackets. | `Width x Height`, `Length`, `Thickness` |
| Square | Square section used for formed stock and certain bracket or spacer parts. | `Width x Height`, `Thickness` |
| L-Shape | Angle profile used for structural supports and brackets. | `Width x Height`, `Length`, `Thickness` |
| U-Shape / Bracket | U-bracket profile used for clamps, supports, and mountings. | `Width x Height`, `Length`, `Thickness` |
| Flange | Flanged profile used where bolt-circle and face dimensions matter. | `Outer diameter (OD)`, `Bolt circle / PCD`, `Thickness` |
| Threaded | Threaded profile used for fittings, studs, and fastening components. | `Thread size`, `Length` |
| Splined | Spline profile used for torque-transfer interfaces. | `Outer diameter (OD)`, `Length`, `Tooth / Spline count` |
| Flexible / Hose | Flexible profile used for hose and fluid-transfer products. | `Tube / Hose ID`, `Length` |
| Kit / Set | Multi-part pack structure used for service kits and bundled hardware. | `Kit / Set quantity` |
| Custom Profile | Non-standard geometry used when a part needs broader preset coverage. | `Mix` |
| Mix | Broad fallback preset for mixed-shape product families. | `Mix` |

### Typical starter teams

| Typical starter team | What this team owns | Example roles |
| --- | --- | --- |
| Incoming inspection | Verifies raw materials, bought-out parts, documents, and lot traceability before release to production. | `Quality Inspector`, `QA Engineer`, `Production Coordinator` |
| Casting/forging | Produces primary blanks and formed feedstock for downstream machining. | `Foundry Operator`, `Forging Technician`, `Casting Supervisor` |
| Press/stamping | Runs sheet and press-forming operations for stamped or pressed blanks. | `Press Operator`, `Die Setter`, `Stamping Supervisor` |
| CNC machining | Machines parts to drawing tolerances and final feature geometry. | `CNC Operator`, `CNC Programmer`, `Machining Supervisor` |
| Heat treatment | Applies hardening and tempering processes to meet material specifications. | `Heat Treatment Operator`, `Metallurgy Technician`, `Heat Treatment Supervisor` |
| Welding/fabrication | Builds welded or fabricated parts and substructures. | `Welder`, `Fabrication Technician`, `Fabrication Supervisor` |
| Assembly | Combines manufactured and bought-out parts into saleable modules. | `Assembly Operator`, `Line Leader`, `Assembly Supervisor` |
| Testing | Runs validation, fitment, and performance checks before final release. | `Test Technician`, `Validation Engineer`, `Test Supervisor` |
| QA | Owns final quality release, segregation, and documentation checks. | `Quality Inspector`, `QA Engineer`, `QA Manager` |
| Warehouse/logistics | Controls storage, packing materials, finished-goods handling, and dispatch readiness. | `Storekeeper`, `Logistics Coordinator`, `Warehouse Manager` |
| Procurement | Sources materials, bought-out parts, and supplier-supported inputs. | `Buyer`, `Sourcing Specialist`, `Procurement Manager` |

Customize this setup from [Products
Settings](admin-settings-quick-map.md#products-settings), [Inventory
Settings](admin-settings-quick-map.md#inventory-settings), [Orders
Settings](admin-settings-quick-map.md#orders-settings), and [Production
Settings](admin-settings-quick-map.md#production-settings).

## Next Step

Once you understand the starting defaults for your industry, continue with
[Definitions](definitions.md) so every team in your business works from the
same terminology.
