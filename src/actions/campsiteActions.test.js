import * as actions from '../actions/campsiteActions';

describe('Campsite Actions', () => {
  it('should display campsites', () => {
    const campsites = [
      {
        type: 'element',
        name: 'detailDescription',
        attributes: {
          alert:
            'Colorado Parks and Wildlife reserves the right, when necessary, to modify any reservation policies.',
          contractID: 'CO',
          description:
            'This popular Denver metro area park is surrounded by beautiful rolling foothills, an expansive reservoir and abundant wildlife. The park includes camping, a livery, miles of hiking and biking trails, the historic Slocum Cabin, a great recreational lake, a marina, and one of the most popular hot-air balloon launch areas on the Front Range. The camping area boasts 197 sites. All campsites are paved, have picnic tables and grills, are surrounded by grass, and offer great views of the foothills.  For current conditions and more information, please visit the Chatfield website: http://cpw.state.co.us/placestogo/Parks/Chatfield',
          drivingDirection:
            'From Denver, the main entrance into the park is one mile south of C-470 on Highway 121 (Wadsworth) make a left into the park.   Directions to the  Plum Creek Entrance are south of C-470 on Santa Fe to Titan Parkway.  Turn west on Titan Parkway to Roxborough Park Road.  Make a right at  Roxborough Park Road and follow into park.*  Please Note:  The canopy at the main entrance is 13 feet.  If camping unit is higher than 13 feet, please use the Plum Creek Entrance.',
          facilitiesDescription: '',
          facility: 'Chatfield State Park',
          facilityID: '50021',
          favorite: 'N',
          fullReservationUrl:
            'https://www.reserveamerica.com/campsiteSearch.do?contractCode=CO&parkId=50021',
          importantInformation:
            ' Camping fees do not include the cost of a park pass. Every vehicle entering the park, including RVs, must have a park pass for each day they are in the park. Please see http://cpw.state.co.us/thingstodo/Pages/CampingRules.aspx for more information. Max height at Deer Creek Entrance is 13 feet. Vehicles of greater height must use Plum Creek Entrance. Visitors with camping units pulling storage trailers/ boats may need to park their trailers in a nearby parking lot (Lakeview Parking Lot). Some sites are equipped with tent pads. Please use www.cpwshop.com to make, cancel, or change reservations or make any license, pass, or retail purchases. ReserveAmerica.com has limited functionality for CPW customers.',
          latitude: '39.5380556',
          listingOnly: 'N',
          longitude: '-105.0872222',
          nearbyAttrctionDescription: '',
          note:
            'Due to fire restrictions and continued drought conditions, all fires must be contained in gas grills or structures furnished by the park.',
          orientationDescription: '',
          recreationDescription: '',
          regionName: 'Northeast Region',
          reservationUrl: '/campsiteSearch.do?contractCode=CO&parkId=50021',
          webURL: ''
        },
        elements: [
          {
            type: 'element',
            name: 'address',
            attributes: {
              city: 'Littleton',
              country: 'United States',
              shortName: 'CHSR',
              state: 'Colorado',
              streetAddress: '11500 N. Roxborough Park Rd.',
              zip: '80125'
            }
          },
          {
            type: 'element',
            name: 'photo',
            attributes: {
              realUrl: '/webphotos/CO/pid50021/0/180x120.jpg',
              url:
                '<img width="180" height="120" src="/webphotos/CO/pid50021/0/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50021/0/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
            }
          },
          {
            type: 'element',
            name: 'photo',
            attributes: {
              realUrl: '/webphotos/CO/pid50021/1/180x120.jpg',
              url:
                '<img width="180" height="120" src="/webphotos/CO/pid50021/1/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50021/1/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
            }
          },
          {
            type: 'element',
            name: 'photo',
            attributes: {
              realUrl: '/webphotos/CO/pid50021/2/180x120.jpg',
              url:
                '<img width="180" height="120" src="/webphotos/CO/pid50021/2/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50021/2/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
            }
          },
          {
            type: 'element',
            name: 'photo',
            attributes: {
              realUrl: '/webphotos/CO/pid50021/3/180x120.jpg',
              url:
                '<img width="180" height="120" src="/webphotos/CO/pid50021/3/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50021/3/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
            }
          },
          {
            type: 'element',
            name: 'photo',
            attributes: {
              realUrl: '/webphotos/CO/pid50021/4/180x120.jpg',
              url:
                '<img width="180" height="120" src="/webphotos/CO/pid50021/4/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50021/4/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
            }
          },
          {
            type: 'element',
            name: 'informationLink',
            attributes: {
              link: '',
              title: ''
            }
          },
          {
            type: 'element',
            name: 'contact',
            attributes: {
              name: 'Direct Line',
              number: '3037917275'
            }
          },
          {
            type: 'element',
            name: 'contact',
            attributes: {
              name: 'Ranger Station',
              number: '3037917275'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'ADA Fish. Access'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Beach (Swimming)'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Biking'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Bird Watching'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Boat Ramp'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Boat Rental'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Boating'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Camper Services Bldg'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Comfort Station'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Cross Country Skiing'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Dog Training Area'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Dump Station'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Firewood Available'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Fishing'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Group Campground'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Group Pavilions Available'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Group Picnic Area'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Hatchery For Fish'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Hiking'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Historical Site(S)'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Horseback Riding'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Hot Air Balloon Launch'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Ice Fishing'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Interpretitive Programs'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Jet Skiing'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Laundry'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Laundry Facilities'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Marina'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Model Airplane Field'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Model Airplane Flying'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Parking'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Pay Phones Available'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Photography'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Picnicking'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Playground'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Sailing And Sailboarding'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Showers'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Skating'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Snack Br Concession'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Snow Shoeing'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Snow Sledding'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Stables'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Store (Retail)'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Swimming'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Telephone'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Toilet, Pit/Vault'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Water Skiing'
            }
          },
          {
            type: 'element',
            name: 'amenity',
            attributes: {
              distance: 'Within Facility',
              name: 'Wildlife Watching Opportunity'
            }
          },
          {
            type: 'element',
            name: 'bulletin',
            attributes: {
              description:
                'Due to fire restrictions and continued drought conditions, all fires must be contained in gas grills or structures furnished by the park.',
              headline: 'Fire Restrictions'
            }
          },
          {
            type: 'element',
            name: 'bulletin',
            attributes: {
              description:
                'Currently much of Chatfield State Park is under construction due to the Chatfield Reallocation Project. As a result there are a number areas that are currently closed and more expected to be closed soon. Please visit http://www.chatfieldreallocation.org for an up-to-date list of area closures &amp;amp; restrictions and more information about the project.',
              headline: '&lt;b&gt;CONSTRUCTION NOTICE&lt;/b&gt;'
            }
          },
          {
            type: 'element',
            name: 'bulletin',
            attributes: {
              description:
                'The park road from the west side of the park to the east will be closed effective October 1st. From October 1, 2018  - May 2019, there will be no thru traffic in the park. All traffic, including camping traffic, must use the east entrance from Titan Rd. to access the campground. ',
              headline: '&lt;b&gt;ROAD CLOSURE&lt;/b&gt;'
            }
          },
          {
            type: 'element',
            name: 'bulletin',
            attributes: {
              description:
                '&lt;p&gt;Attention Colorado Parks and Wildlife Customers: please use &lt;a href=&quot;https://www.cpwshop.com/home.page&quot;&gt;www.cpwshop.com&lt;/a&gt; to make, cancel, or change reservations or make any license, pass, or retail purchases. &lt;a href=&quot;https://www.reserveamerica.com/&quot;&gt;ReserveAmerica.com&lt;/a&gt; has limited functionality for CPW customers.&lt;/p&gt;',
              headline: 'Attention'
            }
          }
        ]
      }
    ];
    const expected = {
      type: 'POPULATE_CAMPSITES',
      campsites: campsites
    };
    const result = actions.populateCampsites(campsites);

    expect(result).toEqual(expected);
  });
});
