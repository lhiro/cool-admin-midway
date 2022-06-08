import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ProjectService } from '../../../service/project';
import { ProjectListEntity } from '../../../entity/project/list';

/**
 * 描述
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ProjectListEntity,
  service: ProjectService,
})
export class ProjectController extends BaseController {}
