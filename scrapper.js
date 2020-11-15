const siteUrl = "https://www.gumtree.com.au/s-laptops/razer+blade/k0c18553";
const axios = require("axios");
const cheerio = require("cheerio");

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  try {
    const $ = await fetchData();
    const list = [];
    $('.user-ad-collection-new-design__wrapper--row').find('a')
     .each((index, element) => {
      const description = $(element).text();
      const link = $(element).attr('href');
      list.push({url: link, description});
    });
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getResults;
