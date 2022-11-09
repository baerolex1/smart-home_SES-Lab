export const BASE_URL = 'http://localhost:3000/api/';

export const BACKEND_URL = {

  DEVICES: `${BASE_URL}devices`,
  LAST_MEASURE: `${BASE_URL}measurements/last/{{deviceName}}`,
  DIAGRAM_VALUES: `${BASE_URL}measurements/diagram/{{deviceName}}/{{take}}`
}