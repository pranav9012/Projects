import fs from 'fs';
import path from 'path';

const assetsPath = "../assets/icons/";

const paths = [];

const svgIcons = fs.readdirSync(assetsPath);
console.log(svgIcons);

svgIcons.forEach((icon) => {
    const iconPath = path.join(assetsPath, icon);
    const Iconstring = assetsPath + icon;
    paths.push(Iconstring);
    console.log('"'+Iconstring+'"');
})
// const iconJson = {icons: paths};
// fs.writeFileSync('icons.json', JSON.stringify(iconJson, null, 2));
// export default paths;