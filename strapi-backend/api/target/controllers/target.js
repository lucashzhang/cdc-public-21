'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.target.search(ctx.query);
    } else {
      entities = await strapi.services.target.find(ctx.query);
    }

    return entities.map(entity => {
      const sanitized = sanitizeEntity(entity, { model: strapi.models.target })
      if (sanitized["Sections"] && !ctx.query.UID) delete sanitized["Sections"];
      return sanitized;
    });
  }
};
