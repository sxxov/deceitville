import duck_base_bin from './duck.base.bin?url';
import Wood053_2K_Normal_jpg from './Wood053_2K_Normal.jpg?url';
import Wood053_2K_Color_jpg from './Wood053_2K_Color.jpg?url';
import Wood053_2K_Roughness_png from './Wood053_2K_Roughness.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "duck.base",
			"translation": [
				4,
				0,
				0
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "Wood",
			"normalTexture": {
				"index": 0,
				"texCoord": 1
			},
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 1,
					"texCoord": 1
				},
				"metallicFactor": 0,
				"metallicRoughnessTexture": {
					"index": 2,
					"texCoord": 1
				}
			}
		}
	],
	"meshes": [
		{
			"name": "Cylinder.002",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2,
						"TEXCOORD_1": 3
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2,
								"TEXCOORD_1": 3
							}
						}
					},
					"indices": 4,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		},
		{
			"sampler": 0,
			"source": 2
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "Wood053_2K_Normal",
			"uri": Wood053_2K_Normal_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "Wood053_2K_Color",
			"uri": Wood053_2K_Color_jpg
		},
		{
			"mimeType": "image/png",
			"name": "Wood053_2K_Roughness",
			"uri": Wood053_2K_Roughness_png
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 1190,
			"max": [
				1.2000000476837158,
				0.39999762177467346,
				1.2000000476837158
			],
			"min": [
				-1.2000000476837158,
				-0.000002384185791015625,
				-1.2000000476837158
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1190,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1190,
			"type": "VEC2"
		},
		{
			"componentType": 5126,
			"count": 1190,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 4212,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 8100,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 8100,
			"uri": duck_base_bin
		}
	]
}