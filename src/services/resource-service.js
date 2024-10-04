import { URLs } from '~/constants/request'
import { axiosClient } from '~/plugins/axiosClient'
import { createUrlPath } from '~/utils/helper-functions'

export const ResourceService = {
  getResourceCategories: async (params) =>
    await axiosClient.get(URLs.resources.resourceCategories.get, { params }),
  updateResourceCategory: (params) =>
    axiosClient.patch(
      createUrlPath(URLs.resources.resourceCategories.patch, params.id),
      params
    ),
  deleteResourceCategory: async (id) =>
    await axiosClient.delete(
      createUrlPath(URLs.resources.resourceCategories.delete, id)
    ),
  createResourceCategory: async (params) =>
    await axiosClient.post(URLs.resources.resourceCategories.post, params)
}
