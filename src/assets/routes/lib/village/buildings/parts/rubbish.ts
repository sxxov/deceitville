import rubbish_bin from './rubbish.bin?url';
import woods_color_jpg from './woods_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
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
			"name": "Rubbish.001",
			"rotation": [
				0,
				0.8055620193481445,
				0,
				0.5925114750862122
			],
			"scale": [
				1.4387112855911255,
				1.4387112855911255,
				1.4387112855911255
			],
			"translation": [
				-9.793825149536133,
				7.581241607666016,
				-45.99848937988281
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.215577971373942,
						0.215577971373942,
						0.215577971373942
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "wooden_color",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.107",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
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
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "woods_color",
			"uri": woods_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 374,
			"max": [
				1.237785816192627,
				0.3302639126777649,
				1.1421970129013062
			],
			"min": [
				-1.0500094890594482,
				-0.24777290225028992,
				-1.2012377977371216
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 374,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 374,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1098,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3548,
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
			"byteLength": 3548,
			"uri": rubbish_bin
		}
	]
}