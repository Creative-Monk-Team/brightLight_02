import React, { useEffect, useState } from "react";
import styles from "../styles/FieldOfStudyTable.module.css";
import jsonData from "../json/FieldOfStudyData.json";

const FieldOfStudyTable = () => {
  const rows = [
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>01.0801</td>
      <td>Agricultural and extension education services</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>01.0802</td>
      <td>Agricultural communication/journalism</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>01.0899</td>
      <td>Agricultural public services, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>01.9999</td>
      <td>
        Agricultural and veterinary sciences/services/operations and related
        fields, other
      </td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0101</td>
      <td>Natural resources/conservation, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0103</td>
      <td>Environmental studies</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0104</td>
      <td>Environmental science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0199</td>
      <td>Natural resources conservation and research, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0201</td>
      <td>Environmental/natural resources management and policy, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0204</td>
      <td>Environmental/natural resource economics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0205</td>
      <td>Water, wetlands and marine resources management</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0208</td>
      <td>
        Environmental/natural resources law enforcement and protective services
      </td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0209</td>
      <td>Energy and environmental policy/environmental energy policy</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>03.0299</td>
      <td>Environmental/natural resources management and policy, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>04.0301</td>
      <td>City/urban, community and regional planning</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>04.0401</td>
      <td>Environmental design/architecture, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>04.0402</td>
      <td>Healthcare environment design/architecture</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>04.0403</td>
      <td>Sustainable design/architecture</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>04.0501</td>
      <td>Interior architecture</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>04.1001</td>
      <td>Real estate development</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>04.9999</td>
      <td>Architecture and related services, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>09.0702</td>
      <td>Digital communication and media/multimedia</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0101</td>
      <td>Computer and information sciences, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0102</td>
      <td>Artificial intelligence</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0103</td>
      <td>Information technology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0104</td>
      <td>Informatics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0105</td>
      <td>Human-centred technology design</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0199</td>
      <td>
        Computer and information sciences and support services, general, other
      </td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0201</td>
      <td>Computer programming/programmer, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0202</td>
      <td>Computer programming, specific applications</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0203</td>
      <td>Computer programming, vendor/product certification</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0204</td>
      <td>Computer game programming</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0205</td>
      <td>Computer programming, specific platforms</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0299</td>
      <td>Computer programming, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0301</td>
      <td>Data processing and data processing technology/technician</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0401</td>
      <td>Information science/studies</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0501</td>
      <td>Computer systems analysis/analyst</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0701</td>
      <td>Computer science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0801</td>
      <td>Web page, digital/multimedia and information resources design</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0802</td>
      <td>Data modelling/warehousing and database administration</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0803</td>
      <td>Computer graphics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0804</td>
      <td>Modelling, virtual environments and simulation</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0899</td>
      <td>Computer software and media applications, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0901</td>
      <td>Computer systems networking and telecommunications, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.0902</td>
      <td>Cloud computing</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.1001</td>
      <td>Network and system administration/administrator</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.1002</td>
      <td>System, networking and LAN/WAN management/manager</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.1003</td>
      <td>
        Computer and information systems security/auditing/information assurance
      </td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.1004</td>
      <td>Web/multimedia management and webmaster</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.1005</td>
      <td>Information technology project management</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.1099</td>
      <td>
        Computer/information technology administration and management, other
      </td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>11.9999</td>
      <td>Computer and information sciences and support services, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0101</td>
      <td>Engineering, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0201</td>
      <td>
        Aerospace, aeronautical and astronautical/space engineering, general
      </td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0202</td>
      <td>Astronautical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0299</td>
      <td>
        Aerospace, aeronautical, and astronautical/space engineering, other
      </td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0301</td>
      <td>Agricultural engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0401</td>
      <td>Architectural engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0501</td>
      <td>Biomedical/medical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0601</td>
      <td>Ceramic sciences and engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0701</td>
      <td>Chemical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0702</td>
      <td>Chemical and biomolecular engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0799</td>
      <td>Chemical engineering, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0801</td>
      <td>Civil engineering, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0802</td>
      <td>Geotechnical and geoenvironmental engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0803</td>
      <td>Structural engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0804</td>
      <td>Transportation and highway engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0805</td>
      <td>Water resources engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0899</td>
      <td>Civil engineering, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0901</td>
      <td>Computer engineering, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0902</td>
      <td>Computer hardware engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0903</td>
      <td>Computer software engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.0999</td>
      <td>Computer engineering, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1001</td>
      <td>Electrical and electronics engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1003</td>
      <td>Laser and optical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1004</td>
      <td>Telecommunications engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1099</td>
      <td>Electrical, electronics and communications engineering, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1101</td>
      <td>Engineering mechanics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1201</td>
      <td>Engineering physics/applied physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1301</td>
      <td>Engineering science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1401</td>
      <td>Environmental/environmental health engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1801</td>
      <td>Materials engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.1901</td>
      <td>Mechanical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2001</td>
      <td>Metallurgical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2101</td>
      <td>Mining and mineral engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2201</td>
      <td>Naval architecture and marine engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2301</td>
      <td>Nuclear engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2401</td>
      <td>Ocean engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2501</td>
      <td>Petroleum engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2701</td>
      <td>Systems engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.2801</td>
      <td>Textile sciences and engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3201</td>
      <td>Polymer/plastics engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3301</td>
      <td>Construction engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3401</td>
      <td>Forest engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3501</td>
      <td>Industrial engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3601</td>
      <td>Manufacturing engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3701</td>
      <td>Operations research</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3801</td>
      <td>Surveying engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.3901</td>
      <td>Geological/geophysical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4001</td>
      <td>Paper science and engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4101</td>
      <td>Electromechanical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4201</td>
      <td>Mechatronics, robotics, and automation engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4301</td>
      <td>Biochemical engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4401</td>
      <td>Engineering chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4501</td>
      <td>Biological/biosystems engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4701</td>
      <td>Electrical and computer engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4801</td>
      <td>Energy systems engineering, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4802</td>
      <td>Power plant engineering</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.4899</td>
      <td>Energy systems engineering, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>14.9999</td>
      <td>Engineering, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>15.0701</td>
      <td>Occupational safety and health technology/technician</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>15.0703</td>
      <td>Industrial safety technology/technician</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>15.1201</td>
      <td>Computer engineering technology/technician, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>15.1202</td>
      <td>Computer/computer systems technology/technician</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>15.1204</td>
      <td>Computer software technology/technician</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>15.1299</td>
      <td>Computer engineering technologies/technicians, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>15.1501</td>
      <td>Engineering/industrial management</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0101</td>
      <td>Biology/biological sciences, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0102</td>
      <td>Biomedical sciences, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0202</td>
      <td>Biochemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0203</td>
      <td>Biophysics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0204</td>
      <td>Molecular biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0205</td>
      <td>Molecular biochemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0206</td>
      <td>Molecular biophysics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0207</td>
      <td>Structural biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0208</td>
      <td>Photobiology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0209</td>
      <td>Radiation biology/radiobiology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0210</td>
      <td>Biochemistry and molecular biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0299</td>
      <td>Biochemistry/biophysics and molecular biology, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0301</td>
      <td>Botany/plant biology, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0305</td>
      <td>Plant pathology/phytopathology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0307</td>
      <td>Plant physiology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0399</td>
      <td>Botany/plant biology, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0401</td>
      <td>Cell/cellular biology and histology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0403</td>
      <td>Anatomy</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0406</td>
      <td>Cell/cellular and molecular biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0407</td>
      <td>Cell biology and anatomy</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0499</td>
      <td>Cell/cellular biology and anatomical sciences, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0502</td>
      <td>Microbiology, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0503</td>
      <td>Medical microbiology and bacteriology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0504</td>
      <td>Virology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0505</td>
      <td>Parasitology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0507</td>
      <td>Immunology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0508</td>
      <td>Microbiology and immunology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0599</td>
      <td>Microbiological sciences and immunology, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0701</td>
      <td>Zoology/animal biology, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0702</td>
      <td>Entomology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0707</td>
      <td>Animal physiology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0799</td>
      <td>Zoology/animal biology, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0802</td>
      <td>Molecular genetics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0804</td>
      <td>Animal genetics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0805</td>
      <td>Plant genetics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0807</td>
      <td>Genome sciences/genomics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0899</td>
      <td>Genetics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0901</td>
      <td>Physiology, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0910</td>
      <td>Pathology/experimental pathology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.0912</td>
      <td>Aerospace physiology and medicine</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1001</td>
      <td>Pharmacology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1004</td>
      <td>Toxicology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1005</td>
      <td>Molecular toxicology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1006</td>
      <td>Environmental toxicology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1101</td>
      <td>Biometry/biometrics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1102</td>
      <td>Biostatistics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1103</td>
      <td>Bioinformatics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1104</td>
      <td>Computational biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1199</td>
      <td>Biomathematics, bioinformatics, and computational biology, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1201</td>
      <td>Biotechnology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1301</td>
      <td>Ecology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1302</td>
      <td>Marine biology and biological oceanography</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1303</td>
      <td>Evolutionary biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1310</td>
      <td>Ecology and evolutionary biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1311</td>
      <td>Epidemiology and biostatistics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1399</td>
      <td>Ecology, evolution, systematics and population biology, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1401</td>
      <td>Molecular medicine</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1501</td>
      <td>Neuroscience</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1502</td>
      <td>Neuroanatomy</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1503</td>
      <td>Neurobiology and anatomy</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1504</td>
      <td>Neurobiology and behaviour</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.1599</td>
      <td>Neurobiology and neurosciences, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>26.9999</td>
      <td>Biological and biomedical sciences, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0101</td>
      <td>Mathematics, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0102</td>
      <td>Algebra and number theory</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0103</td>
      <td>Analysis and functional analysis</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0104</td>
      <td>Geometry/geometric analysis</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0105</td>
      <td>Topology and foundations</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0199</td>
      <td>Mathematics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0301</td>
      <td>Applied mathematics, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0303</td>
      <td>Computational mathematics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0304</td>
      <td>Computational and applied mathematics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0305</td>
      <td>Financial mathematics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0306</td>
      <td>Mathematical biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0399</td>
      <td>Applied mathematics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0501</td>
      <td>Statistics, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0502</td>
      <td>Mathematical statistics and probability</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0503</td>
      <td>Mathematics and statistics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0599</td>
      <td>Statistics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.0601</td>
      <td>Applied statistics, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>27.9999</td>
      <td>Mathematics and statistics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.0101</td>
      <td>Biological and physical sciences</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.0601</td>
      <td>Systems science and theory</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.0801</td>
      <td>Mathematics and computer science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.1001</td>
      <td>Biopsychology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.1501</td>
      <td>Science, technology and society</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.1601</td>
      <td>Accounting and computer science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.1801</td>
      <td>Natural sciences</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.1901</td>
      <td>Nutrition sciences</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.2501</td>
      <td>Cognitive science, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.2599</td>
      <td>Cognitive science, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.2701</td>
      <td>Human biology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3001</td>
      <td>Computational science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3101</td>
      <td>Human computer interaction</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3201</td>
      <td>Marine sciences</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3301</td>
      <td>Sustainability studies</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3401</td>
      <td>Anthrozoology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3501</td>
      <td>Climate science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3701</td>
      <td>Design for human health</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3801</td>
      <td>Earth systems science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.3901</td>
      <td>Economics and computer science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.4101</td>
      <td>Environmental geosciences</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.4301</td>
      <td>Geobiology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.4401</td>
      <td>Geography and environmental studies</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.4801</td>
      <td>Linguistics and computer science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.4901</td>
      <td>Mathematical economics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.5001</td>
      <td>Mathematics and atmospheric/oceanic science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.7001</td>
      <td>Data science, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.7099</td>
      <td>Data science, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.7101</td>
      <td>Data analytics, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.7103</td>
      <td>Data visualization</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.7104</td>
      <td>Financial analytics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>30.7199</td>
      <td>Data analytics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0101</td>
      <td>Physical sciences, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0201</td>
      <td>Astronomy</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0202</td>
      <td>Astrophysics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0203</td>
      <td>Planetary astronomy and science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0299</td>
      <td>Astronomy and astrophysics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0401</td>
      <td>Atmospheric sciences and meteorology, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0402</td>
      <td>Atmospheric chemistry and climatology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0403</td>
      <td>Atmospheric physics and dynamics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0404</td>
      <td>Meteorology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0499</td>
      <td>Atmospheric sciences and meteorology, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0501</td>
      <td>Chemistry, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0502</td>
      <td>Analytical chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0503</td>
      <td>Inorganic chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0504</td>
      <td>Organic chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0506</td>
      <td>Physical chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0507</td>
      <td>Polymer chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0508</td>
      <td>Chemical physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0509</td>
      <td>Environmental chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0510</td>
      <td>Forensic chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0511</td>
      <td>Theoretical chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0512</td>
      <td>Cheminformatics/chemistry informatics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0599</td>
      <td>Chemistry, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0601</td>
      <td>Geology/Earth science, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0602</td>
      <td>Geochemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0603</td>
      <td>Geophysics and seismology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0604</td>
      <td>Paleontology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0605</td>
      <td>Hydrology and water resources science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0606</td>
      <td>Geochemistry and petrology</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0607</td>
      <td>Oceanography, chemical and physical</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0699</td>
      <td>Geological and Earth sciences/geosciences, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0801</td>
      <td>Physics, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0802</td>
      <td>Atomic/molecular physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0804</td>
      <td>Elementary particle physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0805</td>
      <td>Plasma and high-temperature physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0806</td>
      <td>Nuclear physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0807</td>
      <td>Optics/optical sciences</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0808</td>
      <td>Condensed matter and materials physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0809</td>
      <td>Acoustics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0810</td>
      <td>Theoretical and mathematical physics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.0899</td>
      <td>Physics, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.1001</td>
      <td>Materials science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.1002</td>
      <td>Materials chemistry</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.1099</td>
      <td>Materials sciences, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.1101</td>
      <td>Physics and astronomy</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>40.9999</td>
      <td>Physical sciences, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>43.0302</td>
      <td>Crisis/emergency/disaster management</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>43.0403</td>
      <td>Cyber/computer forensics and counterterrorism</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>44.0403</td>
      <td>Public transportation and infrastructure planning/studies</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>45.0603</td>
      <td>Econometrics and quantitative economics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>45.0701</td>
      <td>Geography</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>45.1201</td>
      <td>Urban studies/affairs</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>50.0409</td>
      <td>Graphic design</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>51.2202</td>
      <td>Environmental health</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>51.2206</td>
      <td>Occupational health and industrial hygiene</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>51.2706</td>
      <td>Medical informatics</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.0208</td>
      <td>E-commerce/electronic commerce</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.1201</td>
      <td>Management information systems, general</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.1206</td>
      <td>Information resources management</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.1207</td>
      <td>Knowledge management</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.1299</td>
      <td>Management information systems and services, other</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.1301</td>
      <td>Management science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.1304</td>
      <td>Actuarial science</td>
    </tr>,
    <tr>
      <td>Science, technology, engineering and math (STEM)</td>
      <td>52.1404</td>
      <td>Digital marketing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8101</td>
      <td>
        Veterinary sciences/veterinary clinical sciences, general (Cert., MS,
        MSc, PhD)
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8102</td>
      <td>Comparative and laboratory animal medicine (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8103</td>
      <td>
        Large animal/food animal and equine surgery and medicine (Cert., MS,
        MSc, PhD)
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8104</td>
      <td>Small/companion animal surgery and medicine (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8105</td>
      <td>Veterinary anatomy (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8106</td>
      <td>Veterinary infectious diseases (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8107</td>
      <td>Veterinary microbiology and immunobiology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8108</td>
      <td>Veterinary pathology and pathobiology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8109</td>
      <td>Veterinary physiology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8110</td>
      <td>
        Veterinary preventive medicine, epidemiology and public health (Cert.,
        MS, MSc, PhD)
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8111</td>
      <td>Veterinary toxicology and pharmacology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>01.8199</td>
      <td>
        Veterinary biomedical and clinical sciences, other (Cert., MS, MSc, PhD)
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>05.0210</td>
      <td>Disability studies</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>05.0211</td>
      <td>Deaf studies</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.0101</td>
      <td>Education, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.0201</td>
      <td>Bilingual and multilingual education</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.0202</td>
      <td>Multicultural education</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.0203</td>
      <td>Indigenous education</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.0299</td>
      <td>Bilingual, multilingual and multicultural education, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1001</td>
      <td>Special education and teaching, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1003</td>
      <td>
        Education/teaching of individuals with hearing impairments including
        deafness
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1005</td>
      <td>Education/teaching of individuals with emotional disturbances</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1006</td>
      <td>Education/teaching of individuals with intellectual disabilities</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1007</td>
      <td>Education/teaching of individuals with multiple disabilities</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1008</td>
      <td>
        Education/teaching of individuals with orthopedic and other physical
        health impairments
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1009</td>
      <td>
        Education/teaching of individuals with vision impairments including
        blindness
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1011</td>
      <td>
        Education/teaching of individuals with specific learning disabilities
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1012</td>
      <td>
        Education/teaching of individuals with speech or language impairments
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1013</td>
      <td>Education/teaching of individuals with autism</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1014</td>
      <td>Education/teaching of individuals who are developmentally delayed</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1015</td>
      <td>
        Education/teaching of individuals in early childhood special education
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1016</td>
      <td>Education/teaching of individuals with traumatic brain injuries</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1017</td>
      <td>
        Education/teaching of individuals in elementary special education
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1018</td>
      <td>
        Education/teaching of individuals in junior high/middle school special
        education programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1019</td>
      <td>
        Education/teaching of individuals in secondary special education
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1099</td>
      <td>Special education and teaching, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1101</td>
      <td>Counsellor education/school counselling and guidance services</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1102</td>
      <td>College student counselling and personnel services</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>13.1199</td>
      <td>Student counselling and personnel services, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>19.0501</td>
      <td>Foods, nutrition and wellness studies, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>19.0504</td>
      <td>Human nutrition</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>19.0505</td>
      <td>Foodservice systems administration/management</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>19.0599</td>
      <td>Foods, nutrition and related services, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>19.9999</td>
      <td>Family and consumer sciences/human sciences, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0801</td>
      <td>Genetics, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0802</td>
      <td>Molecular genetics</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0806</td>
      <td>Human/medical genetics</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0807</td>
      <td>Genome sciences/genomics</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0899</td>
      <td>Genetics, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0908</td>
      <td>Exercise physiology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0909</td>
      <td>Vision science/physiological optics</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>26.0910</td>
      <td>Pathology/experimental pathology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>30.1901</td>
      <td>Nutrition sciences</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>31.0501</td>
      <td>
        Sports, kinesiology, and physical education/physical fitness, general
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>31.0505</td>
      <td>Exercise science and kinesiology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>31.0508</td>
      <td>Sports studies</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>31.0599</td>
      <td>
        Sports, kinesiology, and physical education/physical fitness, other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>41.0000</td>
      <td>Science technologies/technicians, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>41.0101</td>
      <td>Biology and biotechnology technologies/technicians</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>41.0204</td>
      <td>Industrial radiologic technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>41.0205</td>
      <td>Nuclear/nuclear power technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>41.0299</td>
      <td>Nuclear and industrial radiologic technologies/technicians, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>41.9999</td>
      <td>Science technologies/technicians, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.0101</td>
      <td>Psychology, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2701</td>
      <td>Cognitive psychology and psycholinguistics</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2702</td>
      <td>Comparative psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2703</td>
      <td>Developmental and child psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2704</td>
      <td>Experimental psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2705</td>
      <td>Personality psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2706</td>
      <td>Behavioural neuroscience</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2707</td>
      <td>Social psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2708</td>
      <td>Psychometrics and quantitative psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2709</td>
      <td>Psychopharmacology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2799</td>
      <td>Research and experimental psychology, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2801</td>
      <td>Clinical psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2802</td>
      <td>Community psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2803</td>
      <td>Counselling psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2804</td>
      <td>Industrial and organizational psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2805</td>
      <td>School psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2806</td>
      <td>Educational psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2807</td>
      <td>Clinical child psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2808</td>
      <td>Environmental psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2809</td>
      <td>Geropsychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2810</td>
      <td>Health/medical psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2811</td>
      <td>Family psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2812</td>
      <td>Forensic psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2813</td>
      <td>Applied psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2814</td>
      <td>Applied behaviour analysis</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2815</td>
      <td>Performance and sport psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2816</td>
      <td>Somatic psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2817</td>
      <td>Transpersonal/spiritual psychology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.2899</td>
      <td>Clinical, counselling and applied psychology, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>42.9999</td>
      <td>Psychology, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>44.0000</td>
      <td>Human services, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>45.0401</td>
      <td>Criminology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0000</td>
      <td>Health services/allied health/health sciences, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0001</td>
      <td>Health and wellness, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0101</td>
      <td>Chiropractic (DC)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0201</td>
      <td>Communication sciences and disorders, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0202</td>
      <td>Audiology/audiologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0203</td>
      <td>Speech-language pathology/pathologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0204</td>
      <td>Audiology/audiologist and speech-language pathology/pathologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0299</td>
      <td>Communication disorders sciences and services, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0502</td>
      <td>Advanced general dentistry (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0504</td>
      <td>
        Dental public health and education (Cert., MS, MSc, MPH, PhD, DPH)
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0506</td>
      <td>Endodontics/endodontology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0507</td>
      <td>Oral/maxillofacial surgery (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0508</td>
      <td>Orthodontics/orthodontology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0509</td>
      <td>Pediatric dentistry/pedodontics (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0510</td>
      <td>Periodontics/periodontology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0511</td>
      <td>Prosthodontics/prosthodontology (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0512</td>
      <td>Digital dentistry (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0513</td>
      <td>Geriatric dentistry (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0514</td>
      <td>Implantology/implant dentistry (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0599</td>
      <td>
        Advanced/graduate dentistry and oral sciences, other (Cert., MS, MSc,
        PhD)
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0699</td>
      <td>Dental support services and allied professions, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0704</td>
      <td>Health unit manager/ward supervisor</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0801</td>
      <td>Medical/clinical assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0802</td>
      <td>Clinical/medical laboratory assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0803</td>
      <td>Occupational therapist assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0805</td>
      <td>Pharmacy technician/assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0806</td>
      <td>Physical therapy assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0810</td>
      <td>Emergency care attendant (EMT ambulance)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0811</td>
      <td>Pathology/pathologist assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0812</td>
      <td>Respiratory therapy technician/assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0813</td>
      <td>Chiropractic assistant/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0814</td>
      <td>Radiologist assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0815</td>
      <td>Lactation consultant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0816</td>
      <td>Speech-language pathology assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0817</td>
      <td>Rehabilitation assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0899</td>
      <td>Allied health and medical assisting services, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0901</td>
      <td>Cardiovascular technology/technologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0902</td>
      <td>Electrocardiograph technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0903</td>
      <td>
        Electroneurodiagnostic/electroencephalographic technology/technologist
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0904</td>
      <td>Emergency medical technology/technician (EMT paramedic)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0905</td>
      <td>Nuclear medical technology/technologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0906</td>
      <td>Perfusion technology/perfusionist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0907</td>
      <td>Radiation therapist/therapeutic radiographer</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0908</td>
      <td>Respiratory care therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0909</td>
      <td>Surgical technology/technologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0910</td>
      <td>
        Diagnostic medical sonography/sonographer and ultrasound technician
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0911</td>
      <td>Medical radiation technologist/radiographer</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0912</td>
      <td>Physician assistant/associate</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0913</td>
      <td>Athletic training/trainer</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0914</td>
      <td>Gene/genetic therapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0915</td>
      <td>Cardiopulmonary technology/technologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0916</td>
      <td>Radiation protection/health physics technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0917</td>
      <td>Polysomnography</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0918</td>
      <td>Hearing instrument specialist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0919</td>
      <td>Mammography technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0920</td>
      <td>Magnetic resonance imaging (MRI) technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0921</td>
      <td>Hyperbaric medicine technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0923</td>
      <td>Orthopedic technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.0999</td>
      <td>
        Allied health diagnostic, intervention and treatment professions, other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1001</td>
      <td>Blood bank technology specialist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1002</td>
      <td>Cytotechnology/cytotechnologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1003</td>
      <td>Hematology technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1004</td>
      <td>Clinical/medical laboratory technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1005</td>
      <td>Clinical laboratory science/medical technology/technologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1006</td>
      <td>Ophthalmic laboratory technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1007</td>
      <td>Histologic technology/histotechnologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1008</td>
      <td>Histologic technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1009</td>
      <td>Phlebotomy technician/phlebotomist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1010</td>
      <td>Cytogenetics/genetics/clinical genetics technology/technologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1011</td>
      <td>Renal/dialysis technologist/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1012</td>
      <td>Sterile processing technology/technician</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1099</td>
      <td>
        Clinical/medical laboratory science/research and allied professions,
        other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1199</td>
      <td>Health/medical preparatory programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1202</td>
      <td>Osteopathic medicine/osteopathy (DO)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1402</td>
      <td>Clinical and translational science (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1403</td>
      <td>Pain management (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1405</td>
      <td>Tropical medicine (Cert., MS, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1499</td>
      <td>Medical clinical sciences/graduate medical studies, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1501</td>
      <td>Substance abuse/addiction counselling</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1503</td>
      <td>Clinical/medical social work</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1504</td>
      <td>Community health services/liaison/counselling</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1505</td>
      <td>Marriage and family therapy/counselling</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1506</td>
      <td>Clinical pastoral counselling/patient counselling</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1507</td>
      <td>Psychoanalysis and psychotherapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1508</td>
      <td>Mental health counselling/counsellor</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1509</td>
      <td>Genetic counselling/counsellor</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1510</td>
      <td>Infant/toddler mental health services</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1511</td>
      <td>Medical family therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1513</td>
      <td>Trauma counselling</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1599</td>
      <td>Mental and social health services and allied professions, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1802</td>
      <td>Optometric technician/assistant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1803</td>
      <td>Ophthalmic technician/technologist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1804</td>
      <td>Orthoptics/orthoptist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.1899</td>
      <td>
        Ophthalmic and optometric support services and allied professions, other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2214</td>
      <td>Public health genetics</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2300</td>
      <td>Rehabilitation and therapeutic professions, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2301</td>
      <td>Art therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2302</td>
      <td>Dance therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2305</td>
      <td>Music therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2306</td>
      <td>Occupational therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2308</td>
      <td>Physical therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2309</td>
      <td>Therapeutic recreation/recreational therapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2310</td>
      <td>Vocational rehabilitation counselling/counsellor</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2311</td>
      <td>Kinesiotherapy/kinesiotherapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2312</td>
      <td>Assistive/augmentative technology and rehabilitation engineering</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2313</td>
      <td>Animal-assisted therapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2314</td>
      <td>Rehabilitation science</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2315</td>
      <td>Drama therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2316</td>
      <td>Horticulture therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2317</td>
      <td>Play therapy/therapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2399</td>
      <td>Rehabilitation and therapeutic professions, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2601</td>
      <td>Health aide</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2602</td>
      <td>Home health aide/home attendant</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2603</td>
      <td>Medication aide</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2604</td>
      <td>Rehabilitation aide</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2605</td>
      <td>Physical therapy technician/aide</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.2699</td>
      <td>Health aides/attendants/orderlies, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3101</td>
      <td>Dietetics/dietitian (RD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3102</td>
      <td>Clinical nutrition/nutritionist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3203</td>
      <td>Nursing education</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3300</td>
      <td>
        Alternative and complementary medicine and medical systems, general
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3301</td>
      <td>Acupuncture and oriental medicine</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3302</td>
      <td>Traditional Chinese medicine and Chinese herbology</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3303</td>
      <td>Naturopathic medicine/naturopathy (ND, NMD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3304</td>
      <td>Homeopathic medicine/homeopathy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3305</td>
      <td>Ayurvedic medicine/Ayurveda</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3306</td>
      <td>Holistic/integrative health</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3399</td>
      <td>Alternative and complementary medicine and medical systems, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3401</td>
      <td>Direct entry midwifery (LM, CPM)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3499</td>
      <td>Alternative and complementary medical support services, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3501</td>
      <td>Massage therapy/therapeutic massage</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3502</td>
      <td>Asian bodywork therapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3503</td>
      <td>Somatic bodywork</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3599</td>
      <td>Somatic bodywork and related therapeutic services, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3601</td>
      <td>Movement therapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3603</td>
      <td>Hypnotherapy/hypnotherapist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3699</td>
      <td>Movement and mind-body therapies, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3701</td>
      <td>Aromatherapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3702</td>
      <td>Herbalism/herbalist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3703</td>
      <td>Polarity therapy</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3799</td>
      <td>Energy-based and biologically-based therapies, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3802</td>
      <td>Nursing administration (Cert., MSN, MS, MScN, MSc, PhD)</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3803</td>
      <td>Adult health nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3804</td>
      <td>Nurse anesthetist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3805</td>
      <td>
        Primary health care nurse/nursing and family practice nurse/nursing
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3806</td>
      <td>Maternal/child health and neonatal nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3807</td>
      <td>Nurse midwife/nursing midwifery</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3809</td>
      <td>Pediatric nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3810</td>
      <td>Psychiatric/mental health nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3811</td>
      <td>Public health/community nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3812</td>
      <td>Perioperative/operating room and surgical nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3813</td>
      <td>Clinical nurse specialist</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3814</td>
      <td>Critical care nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3815</td>
      <td>Occupational and environmental health nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3816</td>
      <td>Emergency room/trauma nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3818</td>
      <td>Nursing practice</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3819</td>
      <td>Palliative care nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3820</td>
      <td>Clinical nurse leader</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3821</td>
      <td>Geriatric nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3822</td>
      <td>Women's health nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3823</td>
      <td>Registered psychiatric nurse/nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3824</td>
      <td>Forensic nursing</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3899</td>
      <td>
        Registered nursing, nursing administration, nursing research and
        clinical nursing, other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3901</td>
      <td>
        Licensed practical/vocational nurse training (LPN, LVN, RPN, Cert.,
        Dipl., AAS)
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3902</td>
      <td>Nursing assistant/aide and patient care assistant/aide</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>51.3999</td>
      <td>
        Practical nursing, vocational nursing and nursing assistants, other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0101</td>
      <td>Oral and maxillofacial surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0102</td>
      <td>Dental public health residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0103</td>
      <td>Endodontics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0104</td>
      <td>Oral and maxillofacial pathology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0105</td>
      <td>Orthodontics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0106</td>
      <td>Pediatric dentistry residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0107</td>
      <td>Periodontology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0108</td>
      <td>Prosthodontics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0109</td>
      <td>Oral and maxillofacial radiology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0110</td>
      <td>Implantology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0199</td>
      <td>Dental residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0299</td>
      <td>Medical residency programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0301</td>
      <td>Veterinary anesthesiology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0302</td>
      <td>Veterinary dentistry residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0303</td>
      <td>Veterinary dermatology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0304</td>
      <td>
        Veterinary emergency and critical care medicine residency programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0305</td>
      <td>Veterinary internal medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0306</td>
      <td>Laboratory animal medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0307</td>
      <td>Veterinary microbiology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0308</td>
      <td>Veterinary nutrition residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0309</td>
      <td>Veterinary ophthalmology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0310</td>
      <td>Veterinary pathology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0311</td>
      <td>Veterinary practice residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0312</td>
      <td>Veterinary preventive medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0313</td>
      <td>Veterinary radiology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0314</td>
      <td>Veterinary surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0315</td>
      <td>Theriogenology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0316</td>
      <td>Veterinary toxicology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0317</td>
      <td>Zoological medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0318</td>
      <td>Poultry veterinarian residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0319</td>
      <td>Veterinary behaviourist residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0320</td>
      <td>Veterinary clinical pharmacology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0399</td>
      <td>Veterinary residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0701</td>
      <td>Nurse practitioner residency/fellowship programs, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0702</td>
      <td>Combined nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0703</td>
      <td>Acute care nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0704</td>
      <td>
        Adult/gerontology acute care nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0705</td>
      <td>
        Adult/gerontology critical care nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0706</td>
      <td>
        Cardiology/cardiovascular nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0707</td>
      <td>
        Clinical informatics nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0708</td>
      <td>Dermatology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0709</td>
      <td>
        Developmental and behavioural pediatrics nurse practitioner
        residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0710</td>
      <td>Diabetes nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0711</td>
      <td>
        Emergency medicine nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0712</td>
      <td>Endocrinology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0713</td>
      <td>Family medicine nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0714</td>
      <td>
        Gastroenterology and hepatology nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0715</td>
      <td>Gastroenterology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0716</td>
      <td>Genetics nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0717</td>
      <td>Gerontology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0718</td>
      <td>Global health nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0719</td>
      <td>
        Hematology-oncology nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0720</td>
      <td>Hepatology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0721</td>
      <td>
        Home-based primary care nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0722</td>
      <td>
        Hospice and palliative medicine nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0723</td>
      <td>
        Hospital medicine nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0724</td>
      <td>
        Infectious diseases nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0725</td>
      <td>Neonatal nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0726</td>
      <td>Nephrology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0727</td>
      <td>Neurology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0728</td>
      <td>Neuroscience nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0729</td>
      <td>
        Obstetrics and gynecology nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0730</td>
      <td>
        Occupational health nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0731</td>
      <td>Orthopedic nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0732</td>
      <td>
        Orthopedic surgery nurse practitioner residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0733</td>
      <td>Pain management nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0734</td>
      <td>Palliative care nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0735</td>
      <td>
        Pediatric hematology-oncology nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0736</td>
      <td>Pediatric nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0737</td>
      <td>
        Pediatric rehabilitation nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0738</td>
      <td>
        Psychiatric/mental health nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0739</td>
      <td>
        Public health/community health nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0740</td>
      <td>Pulmonary nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0741</td>
      <td>Rheumatology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0742</td>
      <td>Rural health nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0743</td>
      <td>Sleep medicine nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0744</td>
      <td>
        Surgical and critical care nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0745</td>
      <td>
        Surgical wound and reconstruction nurse practitioner
        residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0746</td>
      <td>Transplantation nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0747</td>
      <td>
        Trauma and critical care nurse practitioner residency/fellowship
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0748</td>
      <td>Urgent care nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0749</td>
      <td>Urology nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0750</td>
      <td>Women's health nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0751</td>
      <td>Wound care nurse practitioner residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0799</td>
      <td>Nurse practitioner residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0901</td>
      <td>Physician assistant residency/fellowship programs, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0902</td>
      <td>Combined physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0903</td>
      <td>
        Acute care medicine physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0904</td>
      <td>
        Acute care surgery physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0905</td>
      <td>Cardiology physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0906</td>
      <td>
        Cardiothoracic surgery physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0907</td>
      <td>Critical care physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0908</td>
      <td>
        Critical care and trauma surgery physician assistant
        residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0909</td>
      <td>
        Emergency medicine physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0910</td>
      <td>ENT surgery physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0911</td>
      <td>Family medicine physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0912</td>
      <td>Geriatrics physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0913</td>
      <td>
        Hematology-oncology physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0914</td>
      <td>
        Hepatobiliary surgery physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0915</td>
      <td>Hospitalist physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0916</td>
      <td>Neurosurgery physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0917</td>
      <td>
        Orthopedic surgery physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0918</td>
      <td>
        Pediatric surgery physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0919</td>
      <td>
        Transplant surgery physician assistant residency/fellowship programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0920</td>
      <td>Urology physician assistant residency/fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>60.0999</td>
      <td>Physician assistant residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0101</td>
      <td>Combined medical residency/fellowship programs, general</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0102</td>
      <td>Diagnostic radiology/nuclear medicine combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0103</td>
      <td>Emergency medicine/anesthesiology combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0104</td>
      <td>Family medicine/emergency medicine combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0105</td>
      <td>
        Family medicine/osteopathic neuromusculoskeletal medicine combined
        specialty programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0106</td>
      <td>Family medicine/preventive medicine combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0107</td>
      <td>Family medicine/psychiatry combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0108</td>
      <td>Internal medicine/anesthesiology combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0109</td>
      <td>Internal medicine/dermatology combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0110</td>
      <td>Internal medicine/emergency medicine combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0111</td>
      <td>
        Internal medicine/emergency medicine/critical care medicine combined
        specialty programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0112</td>
      <td>Internal medicine/family medicine combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0113</td>
      <td>
        Internal medicine/medical genetics and genomics combined specialty
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0114</td>
      <td>Internal medicine/neurology combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0115</td>
      <td>Internal medicine/pediatrics combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0116</td>
      <td>Internal medicine/preventive medicine combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0117</td>
      <td>Internal medicine/psychiatry combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0118</td>
      <td>
        Medical genetics and genomics/maternal-fetal medicine combined specialty
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0119</td>
      <td>Pediatrics/anesthesiology combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0120</td>
      <td>Pediatrics/emergency medicine combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0121</td>
      <td>
        Pediatrics/medical genetics and genomics combined specialty programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0122</td>
      <td>
        Pediatrics/physical medicine and rehabilitation combined specialty
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0123</td>
      <td>
        Pediatrics/psychology/child and adolescent psychology combined specialty
        programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0124</td>
      <td>Psychiatry/neurology combined specialty programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0125</td>
      <td>
        Reproductive endocrinology and infertility/medical genetics and genomics
        combined specialty programs
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0199</td>
      <td>Combined medical residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0202</td>
      <td>Critical care medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0203</td>
      <td>Geriatric medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0205</td>
      <td>Hospice and palliative medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0206</td>
      <td>Integrative medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0208</td>
      <td>Medical toxicology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0209</td>
      <td>Neuromuscular medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0210</td>
      <td>Pain medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0212</td>
      <td>Sleep medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0213</td>
      <td>Sports medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0214</td>
      <td>Surgery of the hand fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0215</td>
      <td>Telemedicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0216</td>
      <td>Undersea and hyperbaric medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0217</td>
      <td>Wilderness medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0218</td>
      <td>Women's health fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0299</td>
      <td>Multiple-pathway medical fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0301</td>
      <td>Allergy and immunology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0399</td>
      <td>Allergy and immunology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0401</td>
      <td>Anesthesiology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0499</td>
      <td>Anesthesiology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0501</td>
      <td>Dermatology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0502</td>
      <td>Dermatopathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0503</td>
      <td>Pediatric dermatology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0599</td>
      <td>Dermatology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0601</td>
      <td>Emergency medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0602</td>
      <td>Disaster medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0603</td>
      <td>Emergency medical services fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0699</td>
      <td>Emergency medicine residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0701</td>
      <td>Family medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0799</td>
      <td>Family medicine residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0801</td>
      <td>Internal medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0804</td>
      <td>Cardiovascular disease fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0805</td>
      <td>Clinical cardiac electrophysiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0806</td>
      <td>Endocrinology, diabetes and metabolism fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0807</td>
      <td>Gastroenterology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0808</td>
      <td>Hematology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0809</td>
      <td>Hematology-oncology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0810</td>
      <td>Infectious disease fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0811</td>
      <td>Interventional cardiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0812</td>
      <td>Nephrology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0813</td>
      <td>Medical oncology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0814</td>
      <td>Pulmonary disease fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0816</td>
      <td>Rheumatology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0818</td>
      <td>Transplant hepatology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0899</td>
      <td>Internal medicine residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0901</td>
      <td>Clinical biochemical genetics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0902</td>
      <td>Clinical genetics and genomics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0903</td>
      <td>Laboratory genetics and genomics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0904</td>
      <td>Medical biochemical genetics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.0999</td>
      <td>
        Medical genetics and genomics residency/fellowship programs, other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1001</td>
      <td>Neurological surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1099</td>
      <td>Neurological surgery residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1101</td>
      <td>Neurology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1102</td>
      <td>Child neurology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1103</td>
      <td>Clinical neurophysiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1104</td>
      <td>Epilepsy fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1105</td>
      <td>Headache medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1106</td>
      <td>Neurodevelopmental disabilities fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1107</td>
      <td>Vascular neurology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1199</td>
      <td>Neurology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1201</td>
      <td>Nuclear medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1299</td>
      <td>Nuclear medicine residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1301</td>
      <td>Obstetrics and gynecology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1302</td>
      <td>Gynecologic oncology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1303</td>
      <td>Maternal and fetal medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1304</td>
      <td>Reproductive endocrinology/infertility fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1399</td>
      <td>Obstetrics and gynecology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1401</td>
      <td>Ophthalmology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1499</td>
      <td>Ophthalmology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1501</td>
      <td>Orthopedic surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1502</td>
      <td>Musculoskeletal oncology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1503</td>
      <td>Orthopaedic sports medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1504</td>
      <td>Orthopedic surgery of the spine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1505</td>
      <td>Pediatric orthopedics fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1599</td>
      <td>Orthopedic surgery residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1601</td>
      <td>Osteopathic neuromusculoskeletal medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1699</td>
      <td>Osteopathic medicine residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1701</td>
      <td>Otolaryngology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1702</td>
      <td>Neurotology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1703</td>
      <td>Pediatric otolaryngology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1799</td>
      <td>Otolaryngology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1801</td>
      <td>Combined anatomic and clinical pathology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1802</td>
      <td>Anatomical pathology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1803</td>
      <td>Clinical pathology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1804</td>
      <td>Blood banking/transfusion medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1805</td>
      <td>Chemical pathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1806</td>
      <td>Cytopathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1807</td>
      <td>Forensic pathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1808</td>
      <td>Hematological pathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1809</td>
      <td>Immunopathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1810</td>
      <td>Laboratory medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1811</td>
      <td>Medical microbiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1812</td>
      <td>Molecular genetic pathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1813</td>
      <td>Neuropathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1814</td>
      <td>Pediatric pathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1815</td>
      <td>Radioisotopic pathology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1899</td>
      <td>Pathology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1901</td>
      <td>Pediatrics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1902</td>
      <td>Adolescent medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1903</td>
      <td>Child abuse pediatrics fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1904</td>
      <td>Developmental-behavioural pediatrics fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1905</td>
      <td>Neonatal-perinatal medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1906</td>
      <td>Pediatric cardiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1907</td>
      <td>Pediatric critical care medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1908</td>
      <td>Pediatric emergency medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1909</td>
      <td>Pediatric endocrinology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1910</td>
      <td>Pediatric gastroenterology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1911</td>
      <td>Pediatric hematology-oncology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1912</td>
      <td>Pediatric infectious diseases fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1913</td>
      <td>Pediatric nephrology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1914</td>
      <td>Pediatric pulmonology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1915</td>
      <td>Pediatric rheumatology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1917</td>
      <td>Pediatric transplant hepatology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.1999</td>
      <td>Pediatrics residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2001</td>
      <td>Physical medicine and rehabilitation residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2002</td>
      <td>Spinal cord injury medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2003</td>
      <td>Pediatric rehabilitation medicine fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2099</td>
      <td>
        Physical medicine and rehabilitation residency/fellowship programs,
        other
      </td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2101</td>
      <td>Plastic surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2102</td>
      <td>Integrated plastic surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2103</td>
      <td>Plastic surgery within the head and neck fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2199</td>
      <td>Plastic surgery residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2201</td>
      <td>Podiatric medicine and surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2299</td>
      <td>Podiatric medicine residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2301</td>
      <td>Public health and general preventive medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2302</td>
      <td>Aerospace medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2303</td>
      <td>Occupational medicine residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2399</td>
      <td>Preventive medicine residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2401</td>
      <td>Psychiatry residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2402</td>
      <td>Addiction psychiatry fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2403</td>
      <td>Child and adolescent psychiatry fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2404</td>
      <td>Consultation-liaison psychiatry fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2405</td>
      <td>Forensic psychiatry fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2406</td>
      <td>Geriatric psychiatry fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2499</td>
      <td>Psychiatry residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2501</td>
      <td>Radiation oncology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2599</td>
      <td>Radiation oncology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2601</td>
      <td>Diagnostic radiology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2602</td>
      <td>Integrated interventional radiology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2603</td>
      <td>Abdominal radiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2604</td>
      <td>Diagnostic radiologic physics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2605</td>
      <td>Medical nuclear physics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2606</td>
      <td>Musculoskeletal radiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2607</td>
      <td>Neuroradiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2608</td>
      <td>Nuclear radiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2609</td>
      <td>Pediatric radiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2610</td>
      <td>Radiologic physics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2611</td>
      <td>Therapeutic radiologic physics residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2612</td>
      <td>Vascular and interventional radiology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2699</td>
      <td>Radiology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2701</td>
      <td>General surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2702</td>
      <td>Colon and rectal surgery residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2703</td>
      <td>Complex general surgical oncology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2704</td>
      <td>Congenital cardiac surgery fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2705</td>
      <td>Pediatric surgery fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2706</td>
      <td>Surgical critical care fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2707</td>
      <td>Thoracic surgery fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2708</td>
      <td>Vascular surgery fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2799</td>
      <td>Surgery residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2801</td>
      <td>Urology residency programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2802</td>
      <td>Pediatric urology fellowship programs</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.2899</td>
      <td>Urology residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Healthcare</td>
      <td>61.9999</td>
      <td>Medical residency/fellowship programs, other</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>15.0501</td>
      <td>
        Heating, ventilation, air conditioning and refrigeration engineering
        technology/technician
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>15.0614</td>
      <td>Welding engineering technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>15.1001</td>
      <td>Construction engineering technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>15.1703</td>
      <td>Solar energy technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>15.1704</td>
      <td>Wind energy technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0000</td>
      <td>Construction trades, general</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0101</td>
      <td>Masonry/mason</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0201</td>
      <td>Carpentry/carpenter</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0301</td>
      <td>Electrical and power transmission installation/installer, general</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0302</td>
      <td>Electrician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0303</td>
      <td>Lineworker</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0399</td>
      <td>Electrical and power transmission installers, other</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0401</td>
      <td>Building/property maintenance</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0402</td>
      <td>Concrete finishing/concrete finisher</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0403</td>
      <td>Building/home/construction inspection/inspector</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0404</td>
      <td>Drywall installation/drywaller</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0406</td>
      <td>Glazier</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0408</td>
      <td>Painting/painter and wall coverer</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0410</td>
      <td>Roofer</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0411</td>
      <td>Metal building assembly/assembler</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0412</td>
      <td>Building/construction site management/manager</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0413</td>
      <td>Carpet, floor, and tile worker</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0414</td>
      <td>Insulator</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0415</td>
      <td>Building construction technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0499</td>
      <td>Building/construction finishing, management and inspection, other</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.0503</td>
      <td>Plumbing technology/plumber</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>46.9999</td>
      <td>Construction trades, other</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0000</td>
      <td>Mechanics and repairers, general</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0101</td>
      <td>
        General electrical/electronics equipment installation and repair
        technology/technician
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0102</td>
      <td>Business machine repair</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0105</td>
      <td>Industrial electronics technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0106</td>
      <td>Appliance installation and repair technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0199</td>
      <td>
        Electrical/electronics maintenance and repair technologies/technicians,
        other
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0201</td>
      <td>
        Heating, air conditioning, ventilation and refrigeration maintenance
        technology/technician
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0302</td>
      <td>Heavy equipment maintenance technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0303</td>
      <td>Industrial mechanics and maintenance technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0399</td>
      <td>
        Heavy/industrial equipment maintenance technologies/technicians, other
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0615</td>
      <td>Engine machinist</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0701</td>
      <td>
        Energy systems installation and repair technology/technician, general
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0703</td>
      <td>Solar energy system installation and repair technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0704</td>
      <td>Wind energy system installation and repair technology/technician</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0705</td>
      <td>
        Hydroelectric energy system installation and repair
        technology/technician
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0706</td>
      <td>
        Geothermal energy system installation and repair technology/technician
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>47.0799</td>
      <td>
        Energy systems maintenance and repair technologies/technicians, other
      </td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>48.0501</td>
      <td>Machine tool technology/machinist</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>48.0503</td>
      <td>Machine shop technology/assistant</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>48.0508</td>
      <td>Welding technology/welder</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>48.0511</td>
      <td>Metal fabricator</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>48.0599</td>
      <td>Precision metal working, other</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>48.0701</td>
      <td>Woodworking, general</td>
    </tr>,
    <tr>
      <td>Trade</td>
      <td>49.0202</td>
      <td>Construction/heavy equipment/earthmoving equipment operation</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>44.0403</td>
      <td>Public transportation and infrastructure planning/studies</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0302</td>
      <td>Heavy equipment maintenance technology/technician</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0303</td>
      <td>Industrial mechanics and maintenance technology/technician</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0607</td>
      <td>Airframe mechanics and aircraft maintenance technology/technician</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0608</td>
      <td>Aircraft powerplant technology/technician</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0609</td>
      <td>Avionics maintenance technology/technician</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0615</td>
      <td>Engine machinist</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0616</td>
      <td>Marine maintenance/fitter and ship repair technology/technician</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>47.0617</td>
      <td>High performance and custom engine technician/mechanic</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0101</td>
      <td>Aeronautics/aviation/aerospace science and technology, general</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0102</td>
      <td>Airline/commercial/professional pilot and flight crew</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0104</td>
      <td>Aviation/airway management and operations</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0105</td>
      <td>Air traffic controller</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0108</td>
      <td>Flight instructor</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0199</td>
      <td>Air transportation, other</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0202</td>
      <td>Construction/heavy equipment/earthmoving equipment operation</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0205</td>
      <td>Truck and bus driver/commercial vehicle operator and instructor</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0208</td>
      <td>Railroad and railway transportation</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0299</td>
      <td>Ground transportation, other</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0309</td>
      <td>Nautical science/merchant marine officer</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.0399</td>
      <td>Marine transportation, other</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>49.9999</td>
      <td>Transportation and materials moving, other</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>52.0203</td>
      <td>Logistics, materials, and supply chain management</td>
    </tr>,
    <tr>
      <td>Transport</td>
      <td>52.0209</td>
      <td>Transportation/mobility management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0000</td>
      <td>Agriculture, general</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0101</td>
      <td>Agricultural business and management, general</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0102</td>
      <td>Agribusiness/agricultural business operations</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0104</td>
      <td>Farm/farm and ranch management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0105</td>
      <td>Agricultural/farm supplies retailing and wholesaling</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0106</td>
      <td>Agricultural business technology/technician</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0199</td>
      <td>Agricultural business and management, other</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0204</td>
      <td>Agricultural power machinery operation</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0301</td>
      <td>Agricultural production operations, general</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0302</td>
      <td>Animal/livestock husbandry and production</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0304</td>
      <td>Crop production</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0306</td>
      <td>Dairy husbandry and production</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0307</td>
      <td>Horse husbandry/equine science and management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0308</td>
      <td>Agroecology and sustainable agriculture</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0310</td>
      <td>Apiculture</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0399</td>
      <td>Agricultural production operations, other</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0401</td>
      <td>Agricultural and food products processing, general</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0505</td>
      <td>Animal training</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0507</td>
      <td>Equestrian/equine studies</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0599</td>
      <td>Agricultural and domestic animal services, other</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0601</td>
      <td>Applied horticulture/horticulture operations, general</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0603</td>
      <td>Ornamental horticulture</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0604</td>
      <td>Greenhouse operations and management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0605</td>
      <td>Landscaping and groundskeeping</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0606</td>
      <td>Plant nursery operations and management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0607</td>
      <td>Turf and turfgrass management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0699</td>
      <td>Applied horticulture/horticultural business services, other</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0701</td>
      <td>International agriculture</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0901</td>
      <td>Animal sciences, general</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0902</td>
      <td>Agricultural animal breeding</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0903</td>
      <td>Animal health</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0904</td>
      <td>Animal nutrition</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0905</td>
      <td>Dairy science</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0906</td>
      <td>Livestock management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0907</td>
      <td>Poultry science</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.0999</td>
      <td>Animal sciences, other</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.1004</td>
      <td>Viticulture and enology</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.1101</td>
      <td>Plant sciences, general</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.1102</td>
      <td>Agronomy and crop science</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>01.9999</td>
      <td>
        Agricultural and veterinary sciences/services/operations and related
        fields, other
      </td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>12.0506</td>
      <td>Meat cutting/meat cutter</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>31.0302</td>
      <td>Golf course operation and grounds management</td>
    </tr>,
    <tr>
      <td>Agriculture and agri-food</td>
      <td>31.0399</td>
      <td>Parks, recreation, and leisure facilities management, other</td>
    </tr>,
  ];

  let [selectedOption, setSelectedOption] = useState(
    "Agriculture and Agri Food"
  );

  const ITEMS_PER_PAGE = 50;
  const [currentPage, setCurrentPage] = useState(0);
  const [filterText, setFilterText] = useState("");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setCurrentPage(0);
  };

  const filteredRows = rows.filter((row) => {
    const rowText = row.props.children[0].props.children
      .split(" ")
      .join(",")
      .toLowerCase()
      .trim();
    return rowText.includes(filterText.toLowerCase());
  });

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentRows = filteredRows.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const pageCount = Math.ceil(filteredRows.length / ITEMS_PER_PAGE);
  return (
    <div className={styles.tableContainer}>
      <div className={styles.filterContainer}>
        <p style={{ color: "black" }}>
          Filter Data by Field Of Study Category:
        </p>
        <input
          type="text"
          placeholder="Filter..."
          value={filterText}
          onChange={handleFilterChange}
          className={styles.filterInput}
        />
      </div>
      <select
        onChange={(e) => {
          setSelectedOption(e.target.value);
          setFilterText(e.target.value);
        }}
        className={styles.selectOption}
      >
        <option value="Agriculture">
          Agriculture and agri-food
        </option>
        <option value="Healthcare">Healthcare</option>
        <option value="STEM">
          Science, Technology, Engineering and Mathematics (STEM)
        </option>
        <option value="Trade">Trade</option>
        <option value="Transport">Transport</option>
      </select>
      <table className={`${styles.table} ${styles.paginationBorder}`}>
        <thead>
          <tr>
            <th scope="col">Field of study category</th>
            <th scope="col">CIP 2021 code</th>
            <th scope="col">CIP2021 Title</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.length > 0 ? (
            currentRows
          ) : (
            <tr>
              <td colSpan="3">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={styles.pagination}>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            disabled={currentPage === index}
            className={currentPage === index ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FieldOfStudyTable;
