const BlobPaths: Array<string> = [
  'M73.5 -106C93.3 -86.8 106.1 -62.7 116.3 -36.6C126.5 -10.4 134.1 17.8 127.4 42.3C120.7 66.8 99.7 87.6 76.1 121.6C52.5 155.6 26.3 202.8 -2.8 206.7C-31.9 210.6 -63.9 171.2 -100.3 141.4C-136.8 111.6 -177.8 91.3 -187.8 60.9C-197.8 30.5 -176.9 -10.1 -155.1 -42.2C-133.4 -74.2 -110.8 -97.8 -84.8 -115C-58.8 -132.2 -29.4 -143.1 -1.3 -141.4C26.8 -139.6 53.7 -125.2 73.5 -106',
  'M62.3 -115.3C83.5 -83.3 105.4 -70.7 100.3 -54C95.2 -37.3 63.1 -16.4 48.3 -1.2C33.5 14.1 36 23.7 37.7 46.2C39.3 68.6 40.1 103.9 29 114.3C17.8 124.7 -5.2 110.3 -17 91.5C-28.9 72.7 -29.5 49.4 -51.7 37.3C-73.9 25.2 -117.6 24.2 -129.7 12C-141.8 -0.2 -122.3 -23.6 -98.6 -32.3C-74.8 -41.1 -46.9 -35.3 -29.7 -69.1C-12.6 -103 -6.3 -176.5 7.1 -187.6C20.5 -198.6 41.1 -147.3 62.3 -115.3',
  'M101.2 -153.7C127.2 -120.4 141.6 -85.6 154.8 -49.3C168 -13 180.1 24.7 166.6 50.4C153.2 76.1 114.2 89.8 82.2 96.8C50.2 103.7 25.1 103.9 6.4 95C-12.2 86.2 -24.5 68.4 -57.3 61.7C-90.1 55 -143.5 59.5 -151.5 46.5C-159.5 33.5 -122.1 3 -103.1 -26.7C-84.1 -56.4 -83.5 -85.2 -69.4 -122.3C-55.3 -159.4 -27.6 -204.7 5 -211.6C37.6 -218.4 75.2 -186.9 101.2 -153.7',
  'M63.8 -119.2C67.3 -108.5 44 -60.3 56.4 -34.1C68.9 -8 116.9 -4 130.5 7.8C144.1 19.7 123.1 39.3 110.2 64.6C97.3 89.9 92.4 120.7 75.4 133C58.3 145.4 29.2 139.2 14.6 113.9C0 88.7 0 44.3 -25.8 37.1C-51.7 29.8 -103.3 59.7 -131.5 59.7C-159.7 59.7 -164.3 29.8 -167.2 -1.7C-170.1 -33.2 -171.2 -66.3 -159.7 -95.2C-148.2 -124.1 -124.1 -148.6 -95.4 -144.7C-66.7 -140.8 -33.3 -108.4 -1.6 -105.7C30.2 -102.9 60.3 -129.8 63.8 -119.2',
  'M84.9 -129.8C103 -136.5 106.1 -99.7 120.7 -70.9C135.4 -42 161.7 -21 166.3 2.7C170.9 26.3 153.9 52.7 127.5 61.2C101.1 69.7 65.3 60.4 42.5 79.9C19.7 99.4 9.8 147.7 4.9 139.2C0 130.7 0 65.3 -27.4 48.5C-54.9 31.7 -109.7 63.3 -124.4 63.3C-139 63.3 -113.5 31.7 -105.3 4.8C-97.1 -22.2 -106.1 -44.3 -107.5 -72C-108.8 -99.8 -102.4 -133 -83.2 -125.8C-64 -118.5 -32 -70.8 0.7 -71.9C33.3 -73.1 66.7 -123.1 84.9 -129.8',
  'M23.7 -33.9C35.1 -34.5 51.8 -37 50.9 -31.7C49.9 -26.3 31.5 -13.2 20.1 -6.6C8.7 0 4.3 0 5.8 6.4C7.3 12.7 14.7 25.4 14.7 34.9C14.7 44.4 7.3 50.7 -11.7 70.9C-30.7 91.1 -61.3 125.2 -90.2 132.4C-119.1 139.6 -146.1 119.8 -140.5 93.2C-134.8 66.7 -96.4 33.3 -80.2 9.3C-64.1 -14.7 -70.1 -29.3 -74.2 -53.1C-78.3 -77 -80.4 -109.9 -67.7 -108.6C-55 -107.3 -27.5 -71.6 -10.7 -53.2C6.2 -34.7 12.3 -33.4 23.7 -33.9',
  'M39.6 -56.6C51.9 -61.5 62.7 -52 64.7 -40.2C66.7 -28.3 59.9 -14.2 47.6 -7.1C35.3 0 17.7 0 20.5 20.2C23.3 40.4 46.7 80.8 46.7 103.2C46.7 125.5 23.3 129.7 9.3 113.6C-4.7 97.4 -9.3 60.8 -38.2 55.2C-67.1 49.5 -120.1 74.7 -141.5 70.7C-162.8 66.7 -152.4 33.3 -140.9 6.7C-129.3 -20 -116.6 -40 -101.8 -55.3C-86.9 -70.6 -70 -81.2 -52.7 -73.4C-35.3 -65.5 -17.7 -39.3 -2 -35.8C13.7 -32.3 27.3 -51.7 39.6 -56.6',
];

// The first path should always be index 0 because its a good
// starting point

export default BlobPaths;
