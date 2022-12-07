/**
 * Module which holds configurable fields and their values for running scripts.
 * At the moment, only contains configuration for translation workflow.
 * @module configuration
 * */

const configuration = {
  /** Translation configuration section. */
  TRANSLATION: {
    /** API endpoint for translation  vendor. */
    VENDOR_API_URL: process.env.TRANSLATION_VENDOR_API_URL,
    /** Project ID (from vendor) used for translation. */
    VENDOR_PROJECT: process.env.TRANSLATION_VENDOR_PROJECT,
    /** User ID (from  vendor) used for authentication */
    VENDOR_USER: process.env.TRANSLATION_VENDOR_USER,
    /** User secret (from vendor) used for authentication */
    VENDOR_SECRET: process.env.TRANSLATION_VENDOR_SECRET,
    /** Value indicating if configured for 'human' or 'machine' translation. Can also be undefined indicating neither or both. */
    TYPE: process.env.TRANSLATION_TYPE,
  },
};

module.exports = {
  /**
   * Configurable fields and their values for running scripts.
   * At the moment, only contains configuration for translation workflow.
   */
  configuration,
};
