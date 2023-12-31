"""Add repo path to pipeline schedule

Revision ID: e7beb59b44f9
Revises: 83a74eca6ea1
Create Date: 2023-05-30 19:25:57.578309

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e7beb59b44f9'
down_revision = '83a74eca6ea1'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pipeline_schedule', schema=None) as batch_op:
        batch_op.add_column(sa.Column('repo_path', sa.String(length=255), nullable=True))

    with op.batch_alter_table('role', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_role_name'), ['name'], unique=True)

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('role', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_role_name'))

    with op.batch_alter_table('pipeline_schedule', schema=None) as batch_op:
        batch_op.drop_column('repo_path')

    # ### end Alembic commands ###
