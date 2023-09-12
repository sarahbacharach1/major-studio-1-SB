Concept Sketches V1

Concept 1:  ‘Popularity Contest’
This visualization will explore the ‘popularity’ of each art piece. This analysis will use a heatmap grid where each cell represents a specific artwork in the museum's collection. Assign a color to each cell based on the artwork's popularity. Artworks that are more popular will receive a warmer color (e.g., red), while less popular artworks get cooler colors (e.g., blue). Users can click on any cell in the grid to see details about the artwork, including its title, artist, and a brief description in addition to search bars and filters that allow users to narrow down their exploration by artist, time period, or genre. The main dataset used here is objects.csv. Using provenance data to quantify popularity provides a historical context that can help establish the artwork's significance within the art world. Data points on collector interest, public records, scholarly citations, exhibition catalogs, museum acquisitions, auction records, exhibition history, and previous owners will be totaled as 1 point each. Artworks with a higher tally will have a larger ‘impact’ score. I am making the assumption that artwork that is more popular has a bigger 
impact. 

Concept 2: ‘Does size matter?’
‘Does size matter?’ It aims to answer questions about the relationship between artwork dimensions and their significance or ownership by the National Gallery of Art (NGA). Specifically, I want to find out: does the NGA tend to own artworks of certain sizes? Is the golden ratio applicable to their hundreds of thousands pieces of work? Is the NGA more likely to archive or display a work based on its size?.  I will use a dataset called "Object_dimensions.csv '' with five main properties: objectid, element, dimensiontype, dimension, and unitname. This dataset is straightforward and easy to understand just giving us the dimension data points. This is best suited for a scatter plot with width and height on the x and y axes, respectively, to see if there are any patterns or clusters in the sizes of artworks in NGA's collection.


Concept 3: ‘Objects of Interest’ 
This concept  explores the NGA’s collection of objects - as opposed to artworks. This data can be found in published_images.csv. This data includes a picture of each object, and associated .jpeg url, which can be scanned and labeled. These labels in addition to the dates attached to these pieces can be combined to create a hierarchical sunburst chart. The central circle will represent the entire collection, and each ring represents a different level of categorization for example: 
Central Circle: Entire Collection 
IInner Ring(s): High-level Categories (e.g., Sculptures, Decorative Arts, Textiles)
Outer Ring(s): Subcategories (e.g., Sculptures > Ancient Sculptures, Decorative Arts > Ceramics, Textiles > Textile Artifacts)
This concept allows users to discover specific objects of interest within various categories and subcategories. It provides an intuitive way to navigate and appreciate the diversity of objects in the collection beyond traditional artworks.

