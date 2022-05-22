import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ProjectService } from '../../../service/sys/project';
import { ProjectEntity } from '../../../entity/sys/project';

/**
 * 描述
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ProjectEntity,
  service: ProjectService,
})
export class ProjectController extends BaseController {}
