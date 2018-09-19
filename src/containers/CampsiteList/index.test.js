import React from 'react';
import { shallow } from 'enzyme';
import { mockCampsites } from './mockCampsiteListData';
import { populateCampsites } from '../../actions/campsiteActions';
import { CampsiteList } from './index';
import { campObjectMock, mockText } from '../Campsite/mockCampsiteData';
import { mapStateToProps, mapDispatchToProps } from '../CampsiteList';
jest.mock('../../helper/getPosition/getPosition');
jest.mock('../../helper/apiCalls');

describe('CampsiteList', () => {
  let wrapper;
  let populateCampsitesMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CampsiteList
        populateCampsites={populateCampsitesMock}
        campsites={mockCampsites}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a campsites array', () => {
      const mockState = {
        campsites: [
          {
            type: 'element',
            name: 'result',
            attributes: {
              agencyIcon: '',
              agencyName: '',
              availabilityStatus: 'Y',
              contractID: 'IND2',
              contractType: 'PRIVATE',
              facilityID: '720142',
              facilityName: 'Rent an RV for Your Next Adventure',
              faciltyPhoto: '/webphotos/IND2/pid720142/0/80x53.jpg',
              favorite: 'N',
              latitude: '39.7302833',
              listingOnly: 'Y',
              longitude: '-104.9525917',
              regionName: '',
              reservationChannel: 'Web Reservable',
              shortName: 'M042',
              sitesWithAmps: 'Y',
              sitesWithPetsAllowed: 'Y',
              sitesWithSewerHookup: 'N',
              sitesWithWaterHookup: 'N',
              sitesWithWaterfront: 'Lakefront',
              state: 'CO'
            }
          },
          {
            type: 'element',
            name: 'result',
            attributes: {
              agencyIcon: '',
              agencyName: '',
              availabilityStatus: 'Y',
              contractID: 'INDP',
              contractType: 'PRIVATE',
              facilityID: '721016',
              facilityName: 'South Park Mobile Home and RV Community',
              faciltyPhoto: '/webphotos/INDP/pid721016/0/80x53.jpg',
              favorite: 'N',
              latitude: '39.6493861',
              listingOnly: 'Y',
              longitude: '-105.024525',
              regionName: '',
              reservationChannel: 'Web Reservable',
              shortName: 'GS0916',
              sitesWithAmps: 'Y',
              sitesWithPetsAllowed: 'N',
              sitesWithSewerHookup: 'N',
              sitesWithWaterHookup: 'N',
              sitesWithWaterfront: '',
              state: 'CO'
            }
          }
        ]
      };

      const expected = {
        campsites: [
          {
            attributes: {
              agencyIcon: '',
              agencyName: '',
              availabilityStatus: 'Y',
              contractID: 'IND2',
              contractType: 'PRIVATE',
              facilityID: '720142',
              facilityName: 'Rent an RV for Your Next Adventure',
              faciltyPhoto: '/webphotos/IND2/pid720142/0/80x53.jpg',
              favorite: 'N',
              latitude: '39.7302833',
              listingOnly: 'Y',
              longitude: '-104.9525917',
              regionName: '',
              reservationChannel: 'Web Reservable',
              shortName: 'M042',
              sitesWithAmps: 'Y',
              sitesWithPetsAllowed: 'Y',
              sitesWithSewerHookup: 'N',
              sitesWithWaterHookup: 'N',
              sitesWithWaterfront: 'Lakefront',
              state: 'CO'
            },
            name: 'result',
            type: 'element'
          },
          {
            attributes: {
              agencyIcon: '',
              agencyName: '',
              availabilityStatus: 'Y',
              contractID: 'INDP',
              contractType: 'PRIVATE',
              facilityID: '721016',
              facilityName: 'South Park Mobile Home and RV Community',
              faciltyPhoto: '/webphotos/INDP/pid721016/0/80x53.jpg',
              favorite: 'N',
              latitude: '39.6493861',
              listingOnly: 'Y',
              longitude: '-105.024525',
              regionName: '',
              reservationChannel: 'Web Reservable',
              shortName: 'GS0916',
              sitesWithAmps: 'Y',
              sitesWithPetsAllowed: 'N',
              sitesWithSewerHookup: 'N',
              sitesWithWaterHookup: 'N',
              sitesWithWaterfront: '',
              state: 'CO'
            },
            name: 'result',
            type: 'element'
          }
        ]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with an populateCampsite action when populateCampsites is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = populateCampsites({ location: 'denver' });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.populateCampsites({ location: 'denver' });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
