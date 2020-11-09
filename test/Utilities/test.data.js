import { POS_REST, RCAT_STORE } from '../constants';
const request = require('sync-request');

class TestData {
    /**
     * @param {string} line The line code to get info for
     * @param {string} item The item number to get info for.
     * @param {string} customerNumber A customer number to get info for
     */
    getItemInfo(line, item, customerNumber) {
        const displayResOptions = {
            json: [
                {
                    customerNumber: customerNumber,
                    line: line,
                    item: item,
                },
            ],
        };
        const rcatSearchResOptions = {
            json: {
                query: item,
                platformId: '',
                marketId: '',
            },
        };
        const displayRes = request(
            'POST',
            POS_REST + 'product/display-items/',
            displayResOptions
        );
        const rcatSearchRes = request(
            'POST',
            RCAT_STORE + '/products/search',
            rcatSearchResOptions
        );
        const itemInfo = {
            displayItems: JSON.parse(displayRes.getBody('utf8')).displayItem[0],
            rcatSearch: JSON.parse(rcatSearchRes.getBody('utf8')).products.find(
                (obj) => {
                    return (
                        obj.productKeys
                            .find((obj) => {
                                return obj.productKeyType === 'LEGACY';
                            })
                            .groupId.toLowerCase() === line.toLowerCase()
                    );
                }
            ),
        };
        // console.log('Item Info', itemInfo);
        return itemInfo;
    }
}

export default new TestData();
