import { Provide, Inject } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { ProjectListEntity } from '../../entity/project/list';
import { Context } from '@midwayjs/koa';

/**
 * 描述
 */
@Provide()
export class ProjectService extends BaseService {
  @InjectEntityModel(ProjectListEntity)
  ProjectListEntity: Repository<ProjectListEntity>;

  @Inject()
  ctx: Context;
}
