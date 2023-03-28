const getEOLDate = require('../getEOLDate');

describe('eolDate function', () => {
    it('should throw an error if dateString is missing', () => {
      expect(() => getEOLDate()).toThrow('releaseDate must be a valid date in yyyy-MM-dd format')
    })
  
    it('should throw an error if dateString is malformed', () => {
      expect(() => getEOLDate('October 1, 2019')).toThrow('releaseDate must be a valid date in yyyy-MM-dd format')
    })
  
    it('should return an eol date three years from the release date when release date is before Oct 1, 2020', () => {
      expect(getEOLDate('2020-04-03')).toEqual('2023-04-03')
    })
  
    it('should return an eol date three years from the release date when release date is Sept 30, 2020', () => {
      expect(getEOLDate('2020-09-30')).toEqual('2023-09-30')
    })
  
    it('should return an eol date two years from the release date when release date is Oct 1, 2020', () => {
      expect(getEOLDate('2020-10-01')).toEqual('2022-10-01')
    })
  
    it('should return an eol date two years from the release date when release date is between Oct 1, 2020 and Jul 31, 2022', () => {
      expect(getEOLDate('2021-01-05')).toEqual('2023-01-05')
    })
  
    it('should return an eol date two years from the release date when release date is Jul 31, 2022', () => {
      expect(getEOLDate('2022-07-31')).toEqual('2024-07-31')
    })
  
    it('should return an eol date one year from the release date when release date is Aug 1, 2022', () => {
      expect(getEOLDate('2022-08-01')).toEqual('2023-08-01')
    })
  
    it('should return an eol date one year from the release date when release date is after Aug 1, 2022', () => {
      expect(getEOLDate('2023-03-02')).toEqual('2024-03-02')
    })
  })
  